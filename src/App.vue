<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import packageJson from '../package.json'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, deleteDoc } from 'firebase/firestore'
import { auth, db, googleProvider, firebaseConfigured } from './lib/firebase'
import type { DayPlan, IngredientQuantityUnit, Meal, MealIngredient, MealType, ShoppingStatus, Store } from './types'
import {
  CalendarDays, ChefHat, Utensils, Plus, ChevronLeft, ChevronRight, Sun, Moon,
  Languages, Search, LogOut, X, Trash2, Pencil, Sparkles, ShoppingBasket,
  Check, History as HistoryIcon, Store as StoreIcon, House, ShoppingCart, Clock3,
} from '@lucide/vue'

const { t, locale } = useI18n()
const appVersion = packageJson.version
const user = ref<User | null>(null)
const access = ref(false)
const checking = ref(true)
const authError = ref('')
const meals = ref<Meal[]>([])
const stores = ref<Store[]>([])
const plans = ref<Record<string, DayPlan>>({})
const activeTab = ref<'today' | 'meals' | 'plan' | 'shopping'>('today')
const theme = ref<'dark' | 'light'>((localStorage.getItem('diet-theme') as 'dark' | 'light') || 'dark')
const search = ref('')
const modal = ref(false)
const editing = ref<Meal | null>(null)
const selectedDate = ref(new Date())
const historyMode = ref(false)
const planScroller = ref<HTMLElement | null>(null)
const openPickerKey = ref<string | null>(null)
const form = ref({
  name: '',
  description: '',
  tags: [] as string[],
  ingredients: [] as Array<MealIngredient & { localId: string }>,
})
const addingStoreFor = ref<string | null>(null)
const newStoreName = ref('')
const shoppingStatuses = ref<Record<string, ShoppingStatus>>({})

const mealTypes: MealType[] = ['breakfast', 'lunch', 'snack', 'dinner']
const mealTimes = ['10:00', '13:00', '16:00', '20:00']
const today = new Date()
const dateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const todayKey = dateKey(today)
const currentKey = computed(() => dateKey(selectedDate.value))
const dateFromKey = (key: string) => {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
}
const startOfWeek = (date: Date) => {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  result.setDate(result.getDate() - ((result.getDay() + 6) % 7))
  return result
}
const dateLabel = (date: Date) => new Intl.DateTimeFormat(locale.value === 'it' ? 'it-IT' : 'en-US', {
  weekday: 'short', day: 'numeric', month: 'short',
}).format(date)
const fullDate = (date: Date) => new Intl.DateTimeFormat(locale.value === 'it' ? 'it-IT' : 'en-US', {
  weekday: 'long', day: 'numeric', month: 'long',
}).format(date)
const monthDay = (date: Date) => new Intl.DateTimeFormat(locale.value === 'it' ? 'it-IT' : 'en-US', {
  day: 'numeric', month: 'short',
}).format(date)
const sortedMeals = computed(() => meals.value
  .filter(meal => meal.name.toLowerCase().includes(search.value.toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name)))
const todayPlan = computed(() => plans.value[todayKey] || { id: todayKey, date: todayKey, meals: {} } as DayPlan)
const weekDays = computed(() => {
  const monday = startOfWeek(selectedDate.value)
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(monday)
    day.setDate(monday.getDate() + index)
    return day
  })
})
const frequencyFor = (mealId: string) => Object.values(plans.value).reduce((total, day) =>
  total + Object.values(day.meals || {}).filter(planned => planned?.mealId === mealId).length, 0)

function normalizeGramQuantity(value: unknown): string {
  if (typeof value !== 'string' && typeof value !== 'number') return ''
  const raw = String(value).trim()
  if (!raw) return ''
  // Accept legacy values such as "200 g" or "0.5 kg" and normalize them to grams.
  const match = raw.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i)
  if (!match) return ''
  const amount = Number(match[1].replace(',', '.'))
  const grams = /^k/i.test(match[2] || '') ? amount * 1000 : amount
  return Number.isFinite(grams) && grams >= 0 ? String(Number(grams.toFixed(3))) : ''
}

function normalizeUnitQuantity(value: unknown): string {
  if (typeof value !== 'string' && typeof value !== 'number') return ''
  const raw = String(value).trim()
  if (!raw) return ''
  const match = raw.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i)
  if (!match) return ''
  const amount = Number(match[1].replace(',', '.'))
  return Number.isFinite(amount) && amount >= 0 ? String(Number(amount.toFixed(3))) : ''
}

function normalizeQuantity(value: unknown, unit: IngredientQuantityUnit): string {
  return unit === 'unit' ? normalizeUnitQuantity(value) : normalizeGramQuantity(value)
}

function normalizedIngredients(raw: unknown): MealIngredient[] {
  if (!Array.isArray(raw)) return []
  return raw.map((item) => {
    if (typeof item === 'string') return { name: item, quantity: '', quantityUnit: 'g' as const, storeIds: [] }
    if (item && typeof item === 'object') {
      const ingredient = item as { name?: unknown; quantity?: unknown; quantityUnit?: unknown; storeId?: unknown; storeIds?: unknown }
      const legacyStoreIds = typeof ingredient.storeId === 'string' && ingredient.storeId ? [ingredient.storeId] : []
      const storeIds = Array.isArray(ingredient.storeIds)
        ? ingredient.storeIds.filter((storeId): storeId is string => typeof storeId === 'string' && !!storeId)
        : legacyStoreIds
      const quantityUnit: IngredientQuantityUnit = ingredient.quantityUnit === 'unit' ? 'unit' : 'g'
      return {
        name: typeof ingredient.name === 'string' ? ingredient.name : '',
        quantity: normalizeQuantity(ingredient.quantity, quantityUnit),
        quantityUnit,
        storeIds: [...new Set(storeIds)],
      }
    }
    return { name: '', quantity: '', quantityUnit: 'g' as const, storeIds: [] }
  }).filter(item => item.name.trim())
}

let stopMeals: (() => void) | undefined
let stopPlans: (() => void) | undefined
let stopStores: (() => void) | undefined
let stopShopping: (() => void) | undefined
let unsubscribeAuth: (() => void) | undefined

function subscribe() {
  if (!db) return
  stopMeals?.()
  stopPlans?.()
  stopStores?.()
  stopShopping?.()
  stopMeals = onSnapshot(query(collection(db, 'meals'), orderBy('name')), snapshot => {
    meals.value = snapshot.docs.map(item => {
      const data = item.data()
      return {
        id: item.id,
        name: String(data.name || ''),
        description: String(data.description || ''),
        tags: Array.isArray(data.tags) ? data.tags : [],
        ingredients: normalizedIngredients(data.ingredients),
        createdAt: data.createdAt,
      }
    })
  })
  stopPlans = onSnapshot(collection(db, 'plan'), snapshot => {
    const next: Record<string, DayPlan> = {}
    snapshot.docs.forEach(item => {
      const data = item.data()
      next[item.id] = { id: item.id, date: String(data.date || item.id), meals: data.meals || {} } as DayPlan
    })
    plans.value = next
  })
  stopStores = onSnapshot(query(collection(db, 'stores'), orderBy('name')), snapshot => {
    stores.value = snapshot.docs.map(item => ({ id: item.id, name: String(item.data().name || '') }))
  })
  stopShopping = onSnapshot(doc(db, 'shoppingLists', 'current'), snapshot => {
    const storedStatuses = (snapshot.data()?.statuses || {}) as Record<string, string>
    shoppingStatuses.value = Object.fromEntries(
      Object.entries(storedStatuses).map(([key, status]) => [key, status === 'todo' ? 'buy' : status]),
    ) as Record<string, ShoppingStatus>
  })
}

async function checkAccess(currentUser: User) {
  if (!db) {
    checking.value = false
    return
  }
  try {
    const snapshot = await getDoc(doc(db, 'users', currentUser.uid))
    access.value = snapshot.exists() && snapshot.data().enabled === true
    if (access.value) subscribe()
  } catch (error) {
    console.error('Unable to verify user access:', error)
    access.value = false
  } finally {
    checking.value = false
  }
}

function closePicker() {
  openPickerKey.value = null
}
function closePickerOnOutsideClick() {
  closePicker()
}

onMounted(() => {
  document.addEventListener('click', closePickerOnOutsideClick)
  if (!auth || !db) {
    checking.value = false
    return
  }
  unsubscribeAuth = onAuthStateChanged(auth, async currentUser => {
    user.value = currentUser
    access.value = false
    checking.value = true
    stopMeals?.()
    stopPlans?.()
    stopStores?.()
    stopShopping?.()
    meals.value = []
    plans.value = {}
    stores.value = []
    shoppingStatuses.value = {}
    if (currentUser) await checkAccess(currentUser)
    else checking.value = false
  })
})
onUnmounted(() => {
  document.removeEventListener('click', closePickerOnOutsideClick)
  unsubscribeAuth?.()
  stopMeals?.()
  stopPlans?.()
  stopStores?.()
  stopShopping?.()
})

watch(theme, value => {
  document.documentElement.dataset.theme = value
  localStorage.setItem('diet-theme', value)
}, { immediate: true })
watch(locale, value => localStorage.setItem('diet-language', value))
watch([activeTab, currentKey, historyMode], () => {
  if (activeTab.value === 'plan') scrollToFocusedDay()
}, { flush: 'post' })

async function login() {
  if (!auth) return
  authError.value = ''
  try {
    await signInWithPopup(auth, googleProvider)
  } catch (error) {
    authError.value = error instanceof Error ? error.message : 'Authentication failed'
  }
}
async function logout() {
  if (auth) await firebaseSignOut(auth)
}
function togglePicker(key: string) {
  openPickerKey.value = openPickerKey.value === key ? null : key
}
function pickPlanMeal(date: Date, type: MealType, mealId: string) {
  void setPlan(date, type, mealId)
  closePicker()
}
function pickStore(ingredient: { storeIds: string[] }, storeId: string) {
  if (!storeId) {
    ingredient.storeIds = []
    closePicker()
    return
  }
  ingredient.storeIds = ingredient.storeIds.includes(storeId)
    ? ingredient.storeIds.filter(id => id !== storeId)
    : [...ingredient.storeIds, storeId]
}
function storeNames(storeIds: string[]): string {
  return stores.value.filter(store => storeIds.includes(store.id)).map(store => store.name).join(', ')
}
function storeSelectionLabel(storeIds: string[]): string {
  const selectedCount = storeIds.length
  if (!selectedCount) return t('chooseStores')
  if (selectedCount === 1) return storeNames(storeIds) || t('chooseStores')
  return t('storesSelected', { count: selectedCount })
}
function quantityUnitShort(unit: IngredientQuantityUnit): string {
  return unit === 'unit' ? t('quantityUnitPiecesShort') : 'g'
}
function quantityLabel(quantity: string, unit: IngredientQuantityUnit): string {
  if (!quantity) return ''
  const suffix = unit === 'unit' && locale.value === 'en' && Number(quantity) === 1 ? 'pc' : quantityUnitShort(unit)
  return `${quantity} ${suffix}`
}
function pickQuantityUnit(ingredient: { quantityUnit: IngredientQuantityUnit }, unit: IngredientQuantityUnit) {
  ingredient.quantityUnit = unit
  closePicker()
}

function openMeal(meal?: Meal) {
  editing.value = meal || null
  form.value = meal ? {
    name: meal.name,
    description: meal.description || '',
    tags: [...(meal.tags || [])],
    ingredients: normalizedIngredients(meal.ingredients).map(ingredient => ({ ...ingredient, localId: crypto.randomUUID() })),
  } : { name: '', description: '', tags: [], ingredients: [] }
  addingStoreFor.value = null
  newStoreName.value = ''
  modal.value = true
}
function addIngredient() {
  form.value.ingredients.push({ localId: crypto.randomUUID(), name: '', quantity: '', quantityUnit: 'g', storeIds: [] })
}
function removeIngredient(localId: string) {
  form.value.ingredients = form.value.ingredients.filter(ingredient => ingredient.localId !== localId)
  if (addingStoreFor.value === localId) addingStoreFor.value = null
}
async function saveMeal() {
  if (!db || !form.value.name.trim()) return
  const ingredients = form.value.ingredients
    .filter(ingredient => ingredient.name.trim())
    .map(({ name, quantity, quantityUnit, storeIds }) => ({
      name: name.trim(),
      quantity: normalizeQuantity(quantity, quantityUnit),
      quantityUnit,
      storeIds: [...new Set(storeIds)],
    }))
  const payload = {
    name: form.value.name.trim(),
    description: form.value.description.trim(),
    tags: form.value.tags,
    ingredients,
    updatedAt: serverTimestamp(),
  }
  if (editing.value) await setDoc(doc(db, 'meals', editing.value.id), payload, { merge: true })
  else await setDoc(doc(db, 'meals', crypto.randomUUID()), { ...payload, createdAt: serverTimestamp() })
  modal.value = false
}
async function removeMeal(meal: Meal) {
  if (!db || !confirm(t('confirmDelete'))) return
  await deleteDoc(doc(db, 'meals', meal.id))
}
async function addStore(localId: string) {
  if (!db || !newStoreName.value.trim()) return
  const id = crypto.randomUUID()
  const name = newStoreName.value.trim()
  await setDoc(doc(db, 'stores', id), { name, createdAt: serverTimestamp() })
  const ingredient = form.value.ingredients.find(item => item.localId === localId)
  if (ingredient) ingredient.storeIds = [...new Set([...ingredient.storeIds, id])]
  newStoreName.value = ''
  addingStoreFor.value = null
}
async function setPlan(date: Date, type: MealType, mealId: string) {
  if (!db) return
  const key = dateKey(date)
  const chosenMeal = meals.value.find(meal => meal.id === mealId)
  const day = plans.value[key] || { id: key, date: key, meals: {} }
  const nextMeals = { ...day.meals }
  if (chosenMeal) nextMeals[type] = { mealId: chosenMeal.id, mealName: chosenMeal.name }
  else delete nextMeals[type]
  await setDoc(doc(db, 'plan', key), { date: key, meals: nextMeals }, { merge: true })
}
function shiftWeek(delta: number) {
  const next = new Date(selectedDate.value)
  next.setDate(next.getDate() + delta * 7)
  selectedDate.value = next
}
function onHorizontalWheel(event: WheelEvent) {
  if (!event.shiftKey) return
  const delta = event.deltaY || event.deltaX
  if (!delta) return

  // Browsers differ: Shift + wheel can be reported as either deltaY or deltaX.
  event.preventDefault()
  if (planScroller.value) planScroller.value.scrollLeft += delta
}
function scrollToFocusedDay() {
  void nextTick(() => {
    const container = planScroller.value
    if (!container) return

    // In the weekly view focus the selected weekday (initially today);
    // history starts at the earliest day in the archive.
    const focusKey = historyMode.value
      ? (historyDays.value[0] ? dateKey(historyDays.value[0]) : todayKey)
      : currentKey.value
    const card = container.querySelector<HTMLElement>(`[data-day-key="${focusKey}"]`)
    if (!card) return

    const containerRect = container.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    container.scrollTo({ left: container.scrollLeft + cardRect.left - containerRect.left, behavior: 'auto' })
  })
}
function hasMeals(day: DayPlan | undefined) {
  return !!day && Object.values(day.meals || {}).some(Boolean)
}

const firstHistoryDate = computed(() => {
  const candidates = Object.entries(plans.value)
    .filter(([key, day]) => key <= todayKey && hasMeals(day))
    .map(([key]) => key)
    .sort()
  return candidates[0] || todayKey
})
const historyDays = computed(() => {
  const start = dateFromKey(firstHistoryDate.value)
  const end = dateFromKey(todayKey)
  const days: Date[] = []
  const cursor = new Date(start)
  while (cursor <= end) {
    days.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
})
const displayedPlanDays = computed(() => historyMode.value ? historyDays.value : weekDays.value)
const shoppingWeekDays = computed(() => {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = startOfWeek(new Date())
    date.setDate(date.getDate() + index)
    return date
  })
  return days.filter(date => dateKey(date) >= todayKey)
})
function shoppingItemKey(name: string, storeId: string, unit: IngredientQuantityUnit) {
  const baseKey = `${selectedShoppingWeek.value}:${name.trim().toLocaleLowerCase()}:${storeId || 'none'}`
  // Keep legacy gram item keys stable so existing shopping statuses remain intact.
  return unit === 'unit' ? `${baseKey}:unit` : baseKey
}
const selectedShoppingWeek = computed(() => dateKey(startOfWeek(new Date())))
function combineQuantities(values: string[], unit: IngredientQuantityUnit) {
  const quantities = values.map(value => Number(normalizeQuantity(value, unit))).filter(value => Number.isFinite(value) && value > 0)
  if (!quantities.length) return ''
  const total = quantities.reduce((sum, value) => sum + value, 0)
  return String(Number(total.toFixed(3)))
}
const shoppingItems = computed(() => {
  const aggregate = new Map<string, { key: string; name: string; storeId: string; quantityUnit: IngredientQuantityUnit; quantities: string[]; occurrences: number }>()
  for (const date of shoppingWeekDays.value) {
    const day = plans.value[dateKey(date)]
    for (const planned of Object.values(day?.meals || {})) {
      if (!planned) continue
      const meal = meals.value.find(item => item.id === planned.mealId)
      for (const ingredient of meal?.ingredients || []) {
        const name = ingredient.name.trim()
        if (!name) continue
        // An ingredient can be sourced from more than one shop. Show it in each selected shop group.
        const assignedStoreIds = ingredient.storeIds.length ? ingredient.storeIds : ['']
        const quantityUnit = ingredient.quantityUnit || 'g'
        for (const storeId of assignedStoreIds) {
          const key = shoppingItemKey(name, storeId, quantityUnit)
          const existing = aggregate.get(key)
          if (existing) {
            existing.occurrences += 1
            if (ingredient.quantity.trim()) existing.quantities.push(ingredient.quantity.trim())
          } else {
            aggregate.set(key, {
              key, name, storeId, quantityUnit,
              quantities: ingredient.quantity.trim() ? [ingredient.quantity.trim()] : [], occurrences: 1,
            })
          }
        }
      }
    }
  }
  return [...aggregate.values()].map(item => ({
    ...item,
    quantity: combineQuantities(item.quantities, item.quantityUnit),
    storeName: stores.value.find(store => store.id === item.storeId)?.name || t('noStore'),
    status: shoppingStatuses.value[item.key] || 'buy',
  })).sort((a, b) => a.storeName.localeCompare(b.storeName) || a.name.localeCompare(b.name))
})
const shoppingGroups = computed(() => {
  const groups = new Map<string, typeof shoppingItems.value>()
  for (const item of shoppingItems.value) {
    const group = groups.get(item.storeId) || []
    group.push(item)
    groups.set(item.storeId, group)
  }
  return [...groups.entries()].map(([storeId, items]) => ({
    id: storeId,
    name: stores.value.find(store => store.id === storeId)?.name || t('noStore'),
    items,
  }))
})
async function setShoppingStatus(key: string, status: ShoppingStatus) {
  if (!db) return
  shoppingStatuses.value = { ...shoppingStatuses.value, [key]: status }
  await setDoc(doc(db, 'shoppingLists', 'current'), {
    statuses: shoppingStatuses.value,
    updatedAt: serverTimestamp(),
  }, { merge: true })
}
function tagLabel(tag: string) {
  return t(tag)
}
</script>

<template>
  <div v-if="!firebaseConfigured" class="auth-screen center-state">
    <div class="state-icon"><Sparkles /></div><h1>{{ t('welcome') }}</h1><p>{{ t('setup') }}</p><code>cp .env.example .env.local</code>
  </div>
  <div v-else-if="checking" class="auth-screen center-state"><div class="loader" /><p>Loading…</p></div>
  <div v-else-if="!user" class="auth-screen login-state">
    <div class="hero-orbit"><div class="hero-plate"><Utensils :size="34" /></div></div>
    <p class="eyebrow">A MORE MINDFUL ROUTINE</p><h1>{{ t('welcome') }}</h1><p class="muted">Plan ahead. Eat well. Find your rhythm.</p>
    <button class="primary-btn google-btn" @click="login"><span class="google-g">G</span>{{ t('signIn') }}</button>
    <p v-if="authError" class="error-text">{{ authError }}</p>
  </div>
  <div v-else-if="!access" class="auth-screen center-state">
    <div class="state-icon"><X /></div><h2>{{ t('accessDenied') }}</h2><p class="muted">Ask the administrator to enable your UID in Firestore.</p>
    <code>{{ user.uid }}</code><button class="text-btn" @click="logout">{{ t('signOut') }}</button>
  </div>

  <div v-else class="app-shell">
    <header class="app-topbar">
      <div class="header-main-row">
        <div class="brand top-brand"><div class="brand-mark"><Utensils :size="18" /></div><span class="brand-copy"><span class="brand-name">diet<span class="brand-dot">.</span></span><span class="brand-version">v{{ appVersion }}</span></span></div>
        <div class="header-date">{{ fullDate(new Date()) }}</div>
        <div class="top-actions">
          <button class="icon-btn" @click="theme = theme === 'dark' ? 'light' : 'dark'" :title="t(theme === 'dark' ? 'light' : 'dark')"><Sun v-if="theme === 'dark'" /><Moon v-else /></button>
          <button class="icon-btn" @click="locale = locale === 'en' ? 'it' : 'en'" :title="t('language')"><Languages /></button>
          <button class="icon-btn" @click="logout" :title="t('signOut')"><LogOut /></button>
        </div>
      </div>
      <nav class="top-nav" aria-label="Main navigation">
        <button v-for="tab in ['today', 'meals', 'plan', 'shopping'] as const" :key="tab" :class="['top-nav-item', { active: activeTab === tab }]" @click="activeTab = tab">
          <Sun v-if="tab === 'today'" /><ChefHat v-else-if="tab === 'meals'" /><CalendarDays v-else-if="tab === 'plan'" /><ShoppingBasket v-else />
          <span>{{ t(tab) }}</span>
        </button>
      </nav>
    </header>

    <main class="main-content">
      <!-- Today intentionally has no duplicate heading/date: the date is centered in the sticky header. -->
      <section v-if="activeTab === 'today'" class="page today-page">
        <div class="today-schedule">
          <article v-for="(type, index) in mealTypes" :key="type" class="today-meal-row">
            <div class="today-time-column">
              <span class="today-meal-type-label">{{ t(type) }}</span>
              <div class="meal-time"><Clock3 :size="16" /><span>{{ mealTimes[index] }}</span></div>
            </div>
            <div class="today-meal-card">
              <div class="today-meal-info">
                <h3>{{ todayPlan.meals[type]?.mealName || t('emptyDay') }}</h3>
                <p v-if="todayPlan.meals[type]" class="ingredient-summary">
                  {{ (meals.find(meal => meal.id === todayPlan.meals[type]?.mealId)?.ingredients || []).map(ingredient => ingredient.name).join(' · ') }}
                </p>
              </div>
              <div class="custom-select-wrap" @click.stop>
                <button class="custom-select-trigger" :aria-expanded="openPickerKey === `today-${type}`" @click="togglePicker(`today-${type}`)">
                  <span>{{ meals.find(meal => meal.id === todayPlan.meals[type]?.mealId)?.name || t('selectDish') }}</span><ChevronRight class="select-chevron" :size="16" />
                </button>
                <div v-if="openPickerKey === `today-${type}`" class="custom-select-menu">
                  <button class="custom-select-option" :class="{ selected: !todayPlan.meals[type] }" @click="pickPlanMeal(new Date(), type, '')">{{ t('emptyDay') }}</button>
                  <button v-for="meal in meals" :key="meal.id" class="custom-select-option" :class="{ selected: todayPlan.meals[type]?.mealId === meal.id }" @click="pickPlanMeal(new Date(), type, meal.id)">{{ meal.name }}</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section v-else-if="activeTab === 'meals'" class="page">
        <div class="page-heading compact section-heading">
          <h1>{{ t('meals') }}</h1>
          <button class="primary-btn" @click="openMeal()"><Plus :size="17" />{{ t('addMeal') }}</button>
        </div>
        <div class="list-toolbar"><div class="search-box"><Search :size="17" /><input v-model="search" :placeholder="t('search')" /></div><span class="sort-label">{{ t('alphabetical') }} ↕</span></div>
        <div v-if="sortedMeals.length" class="meals-list">
          <article v-for="(meal, index) in sortedMeals" :key="meal.id" class="meal-row">
            <div class="meal-row-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="meal-row-main">
              <h3>{{ meal.name }}</h3><p v-if="meal.description">{{ meal.description }}</p>
              <div class="tag-list"><span v-for="tag in meal.tags || []" :key="tag" class="nutrition-tag" :class="tag">{{ tagLabel(tag) }}</span></div>
              <div v-if="meal.ingredients.length" class="ingredient-preview">
                <span v-for="ingredient in meal.ingredients" :key="`${ingredient.name}-${ingredient.storeIds.join(',')}`" class="ingredient-chip">
                  {{ ingredient.name }}<small v-if="ingredient.quantity">{{ quantityLabel(ingredient.quantity, ingredient.quantityUnit) }}</small><small v-if="ingredient.storeIds.length">· {{ storeNames(ingredient.storeIds) }}</small>
                </span>
              </div>
            </div>
            <div class="frequency"><div class="frequency-label">{{ t('timesPlanned') }}</div><strong>{{ frequencyFor(meal.id) }}</strong></div>
            <div class="row-actions"><button class="icon-btn" :title="t('editMeal')" @click="openMeal(meal)"><Pencil /></button><button class="icon-btn danger" :title="t('delete')" @click="removeMeal(meal)"><Trash2 /></button></div>
          </article>
        </div>
        <div v-else class="empty-collection"><div class="state-icon"><ChefHat /></div><h3>{{ t('noMeals') }}</h3><button class="text-btn" @click="openMeal()">{{ t('addMeal') }} +</button></div>
      </section>

      <section v-else-if="activeTab === 'plan'" class="page plan-page" @wheel="onHorizontalWheel">
        <div class="page-heading compact plan-heading section-heading">
          <h1>{{ historyMode ? t('history') : t('plan') }}</h1>
          <div class="plan-toolbar">
            <template v-if="!historyMode">
              <button class="icon-btn plan-arrow" :title="t('previous')" @click="shiftWeek(-1)"><ChevronLeft /></button>
              <button class="secondary-btn this-week-btn" @click="selectedDate = new Date()">{{ t('thisWeek') }}</button>
              <button class="icon-btn plan-arrow" :title="t('next')" @click="shiftWeek(1)"><ChevronRight /></button>
              <button class="secondary-btn history-btn" @click="historyMode = true"><HistoryIcon :size="16" />{{ t('history') }}</button>
            </template>
            <button v-else class="secondary-btn history-btn" @click="historyMode = false"><ChevronLeft :size="16" />{{ t('backToPlan') }}</button>
          </div>
        </div>

        <div ref="planScroller" class="plan-horizontal">
          <article v-for="day in displayedPlanDays" :key="dateKey(day)" :data-day-key="dateKey(day)" class="day-card" :class="{ 'day-card-today': dateKey(day) === todayKey, 'day-card-focused': !historyMode && dateKey(day) === currentKey, 'history-day-card': historyMode }">
            <header class="day-card-header">
              <div><span class="day-weekday">{{ new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', { weekday: 'long' }).format(day) }}</span><h2>{{ monthDay(day) }}</h2></div>
              <span v-if="dateKey(day) === todayKey" class="today-marker">{{ t('today') }}</span>
            </header>
            <div class="day-card-meals">
              <div v-for="(type, index) in mealTypes" :key="type" class="day-meal-row">
                <div class="day-meal-time">{{ mealTimes[index] }}</div>
                <div class="day-meal-detail">
                  <span class="day-meal-type">{{ t(type) }}</span>
                  <template v-if="!historyMode">
                    <div class="custom-select-wrap day-meal-select" @click.stop>
                      <button class="custom-select-trigger" :aria-expanded="openPickerKey === `plan-${dateKey(day)}-${type}`" @click="togglePicker(`plan-${dateKey(day)}-${type}`)">
                        <span>{{ plans[dateKey(day)]?.meals[type]?.mealName || t('emptyDay') }}</span><ChevronRight class="select-chevron" :size="15" />
                      </button>
                      <div v-if="openPickerKey === `plan-${dateKey(day)}-${type}`" class="custom-select-menu">
                        <button class="custom-select-option" :class="{ selected: !plans[dateKey(day)]?.meals[type] }" @click="pickPlanMeal(day, type, '')">{{ t('emptyDay') }}</button>
                        <button v-for="meal in meals" :key="meal.id" class="custom-select-option" :class="{ selected: plans[dateKey(day)]?.meals[type]?.mealId === meal.id }" @click="pickPlanMeal(day, type, meal.id)">{{ meal.name }}</button>
                      </div>
                    </div>
                  </template>
                  <p v-else class="history-meal-name">{{ plans[dateKey(day)]?.meals[type]?.mealName || t('noMealSelected') }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section v-else class="page shopping-page">
        <div class="page-heading compact section-heading"><h1>{{ t('shopping') }}</h1></div>
        <div v-if="shoppingItems.length" class="shopping-groups">
          <section v-for="group in shoppingGroups" :key="group.id || 'no-store'" class="shopping-store-group">
            <header class="shopping-store-heading"><StoreIcon :size="17" /><h2>{{ group.name }}</h2><span>{{ group.items.length }}</span></header>
            <article v-for="item in group.items" :key="item.key" class="shopping-item-row">
              <div class="shopping-item-info"><h3>{{ item.name }}</h3><p><span v-if="item.quantity">{{ quantityLabel(item.quantity, item.quantityUnit) }}</span><span v-if="!item.quantity && item.occurrences > 1">{{ item.occurrences }}×</span></p></div>
              <div class="shopping-status-control" role="group" :aria-label="item.name">
                <button :class="{ selected: item.status === 'home' }" @click="setShoppingStatus(item.key, 'home')"><House :size="14" /><span>{{ t('alreadyAtHome') }}</span></button>
                <button :class="{ selected: item.status === 'bought' }" @click="setShoppingStatus(item.key, 'bought')"><Check :size="14" /><span>{{ t('bought') }}</span></button>
                <button :class="{ selected: item.status === 'buy' }" @click="setShoppingStatus(item.key, 'buy')"><ShoppingCart :size="14" /><span>{{ t('toBuy') }}</span></button>
              </div>
            </article>
          </section>
        </div>
        <div v-else class="empty-collection"><ShoppingBasket :size="30" /><h3>{{ t('shoppingEmpty') }}</h3><p class="muted">{{ t('shoppingEmptyHint') }}</p></div>
      </section>
    </main>

    <div v-if="modal" class="modal-backdrop" @click.self="modal = false">
      <section class="meal-modal">
        <div class="modal-header"><div><p class="eyebrow">MEAL LIBRARY</p><h2>{{ editing ? t('editMeal') : t('addMeal') }}</h2></div><button class="icon-btn" @click="modal = false"><X /></button></div>
        <form @submit.prevent="saveMeal">
          <label class="form-field">{{ t('mealName') }}<input v-model="form.name" required maxlength="90" autofocus /></label>
          <label class="form-field">{{ t('description') }}<textarea v-model="form.description" rows="2" maxlength="300" /></label>
          <div class="ingredients-editor">
            <div class="ingredients-editor-heading"><h3>{{ t('ingredients') }}</h3><button type="button" class="secondary-btn small-btn" @click="addIngredient"><Plus :size="15" />{{ t('addIngredient') }}</button></div>
            <p v-if="!form.ingredients.length" class="empty-form-hint">{{ t('ingredientsEmpty') }}</p>
            <div v-for="ingredient in form.ingredients" :key="ingredient.localId" class="ingredient-editor-row">
              <div class="ingredient-editor-fields">
                <label class="form-field ingredient-name-field">{{ t('ingredientName') }}<input v-model="ingredient.name" required :placeholder="t('ingredientName')" /></label>
                <div class="form-field ingredient-quantity-field">
                  <span>{{ t('quantity') }}</span>
                  <span class="quantity-input-wrap" @click.stop>
                    <input :value="ingredient.quantity" :aria-label="t('quantity')" type="number" min="0" :step="ingredient.quantityUnit === 'unit' ? 1 : 'any'" :inputmode="ingredient.quantityUnit === 'unit' ? 'numeric' : 'decimal'" :placeholder="ingredient.quantityUnit === 'unit' ? '1' : '200'" @input="ingredient.quantity = ($event.target as HTMLInputElement).value" />
                    <button type="button" class="quantity-unit quantity-unit-select" :aria-expanded="openPickerKey === `quantity-${ingredient.localId}`" @click="togglePicker(`quantity-${ingredient.localId}`)">{{ quantityUnitShort(ingredient.quantityUnit) }}<ChevronRight :size=12 /></button>
                    <div v-if="openPickerKey === `quantity-${ingredient.localId}`" class="quantity-unit-menu">
                      <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'g' }" @click="pickQuantityUnit(ingredient, 'g')">{{ t('quantityUnitGrams') }}<Check v-if="ingredient.quantityUnit === 'g'" :size=13 /></button>
                      <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'unit' }" @click="pickQuantityUnit(ingredient, 'unit')">{{ t('quantityUnitPieces') }}<Check v-if="ingredient.quantityUnit === 'unit'" :size=13 /></button>
                    </div>
                  </span>
                </div>
              </div>
              <div class="store-picker-line">
                <span class="field-caption">{{ t('store') }}</span>
                <div class="custom-select-wrap store-select-wrap" @click.stop>
                  <button type="button" class="custom-select-trigger" :aria-expanded="openPickerKey === `store-${ingredient.localId}`" @click="togglePicker(`store-${ingredient.localId}`)">
                    <span>{{ storeSelectionLabel(ingredient.storeIds) }}</span><ChevronRight class="select-chevron" :size="15" />
                  </button>
                  <div v-if="openPickerKey === `store-${ingredient.localId}`" class="custom-select-menu">
                    <button type="button" class="custom-select-option" :class="{ selected: !ingredient.storeIds.length }" @click="pickStore(ingredient, '')">{{ t('noStore') }}<Check v-if="!ingredient.storeIds.length" :size="14" /></button>
                    <button v-for="store in stores" :key="store.id" type="button" class="custom-select-option multi-select-option" :class="{ selected: ingredient.storeIds.includes(store.id) }" @click="pickStore(ingredient, store.id)">{{ store.name }}<Check v-if="ingredient.storeIds.includes(store.id)" :size="14" /></button>
                  </div>
                </div>
                <button type="button" class="text-btn add-store-link" @click="addingStoreFor = addingStoreFor === ingredient.localId ? null : ingredient.localId"><Plus :size="14" />{{ t('addStore') }}</button>
                <button type="button" class="icon-btn remove-ingredient" :title="t('remove')" @click="removeIngredient(ingredient.localId)"><Trash2 :size="15" /></button>
              </div>
              <div v-if="addingStoreFor === ingredient.localId" class="new-store-form">
                <input v-model="newStoreName" :placeholder="t('newStore')" maxlength="60" @keydown.enter.prevent="addStore(ingredient.localId)" />
                <button class="primary-btn small-btn" type="button" :disabled="!newStoreName.trim()" @click="addStore(ingredient.localId)">{{ t('saveStore') }}</button>
              </div>
            </div>
          </div>
          <fieldset><legend>{{ t('tags') }}</legend><label v-for="tag in ['carbs', 'protein', 'fat']" :key="tag" class="check-label"><input v-model="form.tags" type="checkbox" :value="tag" /><span>{{ t(tag) }}</span></label></fieldset>
          <div class="modal-actions"><button type="button" class="secondary-btn" @click="modal = false">{{ t('cancel') }}</button><button class="primary-btn" type="submit">{{ t('save') }}</button></div>
        </form>
      </section>
    </div>
  </div>
</template>
