<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import packageJson from '../package.json'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { collection, deleteDoc, deleteField, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db, googleProvider, firebaseConfigured } from './lib/firebase'
import type { DayPlan, IngredientQuantityUnit, Meal, MealIngredient, MealType, ShoppingStatus, Store } from './types'
import {
  CalendarDays, ChefHat, Utensils, Plus, ChevronLeft, ChevronRight, Sun, Moon,
  Languages, Search, LogOut, X, Trash2, Pencil, Sparkles, ShoppingBasket,
  Check, Store as StoreIcon, House, ShoppingCart, Clock3, SlidersHorizontal,
  ChevronUp, ChevronDown,
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
const openPickerKey = ref<string | null>(null)
const form = ref({
  name: '',
  ingredients: [] as Array<MealIngredient & { localId: string }>,
})
const addingStoreFor = ref<string | null>(null)
const newStoreName = ref('')
const shoppingStatuses = ref<Record<string, ShoppingStatus>>({})
const storePriorityOrder = ref<string[]>([])
const storePriorityDraft = ref<string[]>([])
const storePriorityModal = ref(false)

const orderedStores = computed(() => {
  const byId = new Map(stores.value.map(store => [store.id, store]))
  const configured = storePriorityOrder.value
    .map(id => byId.get(id))
    .filter((store): store is Store => !!store)
  const configuredIds = new Set(configured.map(store => store.id))
  // New shops are appended alphabetically; deleted shops disappear from the effective order.
  return [...configured, ...stores.value.filter(store => !configuredIds.has(store.id))]
})
const priorityModalStores = computed(() => {
  const byId = new Map(stores.value.map(store => [store.id, store]))
  return storePriorityDraft.value
    .map(id => byId.get(id))
    .filter((store): store is Store => !!store)
})

const mealTypes: MealType[] = ['breakfast', 'lunch', 'snack', 'dinner']
const mealTimes = ['10:00', '13:00', '16:00', '20:00']
const today = new Date()
const dateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const todayKey = dateKey(today)
const planStartDate = new Date(2026, 10, 16)
const planStartKey = '2026-11-16'
const planningReferenceDate = today < planStartDate ? planStartDate : today
const planDefaultDate = new Date(today)
if (today.getDay() === 6) planDefaultDate.setDate(planDefaultDate.getDate() + 2)
else if (today.getDay() === 0) planDefaultDate.setDate(planDefaultDate.getDate() + 1)
const selectedDate = ref(new Date(planDefaultDate < planStartDate ? planStartDate : planDefaultDate))
const shoppingWeekSelection = ref<'this' | 'next'>(today.getDay() === 0 || today.getDay() === 6 ? 'next' : 'this')
const excludeAlreadyAtHome = ref(false)
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
const planStartWeekKey = dateKey(startOfWeek(planStartDate))
const selectedShoppingWeek = computed(() => {
  const monday = startOfWeek(today)
  if (shoppingWeekSelection.value === 'next') monday.setDate(monday.getDate() + 7)
  return dateKey(monday)
})
const canGoToPreviousWeek = computed(() => dateKey(startOfWeek(selectedDate.value)) > planStartWeekKey)
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
const weekStartKey = dateKey(startOfWeek(planningReferenceDate))
const currentWeekEndDate = new Date(startOfWeek(planningReferenceDate))
currentWeekEndDate.setDate(currentWeekEndDate.getDate() + 6)
const currentWeekEndKey = dateKey(currentWeekEndDate)
const weekKeyFor = (key: string) => dateKey(startOfWeek(dateFromKey(key)))

function thisWeekFrequencyFor(mealId: string): number {
  return Object.entries(plans.value).reduce((total, [key, day]) => {
    if (weekKeyFor(key) !== weekStartKey) return total
    return total + Object.values(day.meals || {}).filter(planned => planned?.mealId === mealId).length
  }, 0)
}

function averageFrequencyFor(mealId: string): number {
  const matchingDays = Object.entries(plans.value)
    .filter(([key, day]) => key >= planStartKey && key <= currentWeekEndKey &&
      Object.values(day.meals || {}).some(planned => planned?.mealId === mealId))
    .sort(([a], [b]) => a.localeCompare(b))
  if (!matchingDays.length) return 0

  const firstWeekDate = startOfWeek(dateFromKey(matchingDays[0][0]))
  const currentWeekDate = startOfWeek(planningReferenceDate)
  const firstUtcDay = Date.UTC(firstWeekDate.getFullYear(), firstWeekDate.getMonth(), firstWeekDate.getDate())
  const currentUtcDay = Date.UTC(currentWeekDate.getFullYear(), currentWeekDate.getMonth(), currentWeekDate.getDate())
  const elapsedWeeks = Math.floor((currentUtcDay - firstUtcDay) / (7 * 24 * 60 * 60 * 1000)) + 1
  const totalOccurrences = matchingDays.reduce((total, [, day]) =>
    total + Object.values(day.meals || {}).filter(planned => planned?.mealId === mealId).length, 0)
  return Number((totalOccurrences / Math.max(1, elapsedWeeks)).toFixed(1))
}

function frequencyTone(value: number): 'low' | 'medium' | 'high' {
  if (value >= 3) return 'high'
  if (value >= 1.5) return 'medium'
  return 'low'
}

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
    const data = snapshot.data() || {}
    const storedStatuses = (data.statuses || {}) as Record<string, string>
    const storedPriorityOrder = Array.isArray(data.storePriorityOrder)
      ? data.storePriorityOrder.filter((storeId): storeId is string => typeof storeId === 'string' && !!storeId)
      : []
    shoppingStatuses.value = Object.fromEntries(
      Object.entries(storedStatuses).map(([key, status]) => [key, status === 'todo' ? 'buy' : status]),
    ) as Record<string, ShoppingStatus>
    storePriorityOrder.value = [...new Set(storedPriorityOrder)]
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
    storePriorityOrder.value = []
    storePriorityDraft.value = []
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
function selectShoppingWeek(week: 'this' | 'next') {
  shoppingWeekSelection.value = week
  closePicker()
}
function pickPlanMeal(date: Date, type: MealType, mealId: string) {
  void setPlan(date, type, mealId)
  closePicker()
}
function clearPlanMeal(date: Date, type: MealType) {
  void setPlan(date, type, '')
  closePicker()
}
function plannedMealName(dayKey: string, type: MealType): string | undefined {
  const planned = plans.value[dayKey]?.meals?.[type]
  if (!planned) return undefined
  return meals.value.find(meal => meal.id === planned.mealId)?.name || planned.mealName || undefined
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
    ingredients: normalizedIngredients(meal.ingredients).map(ingredient => ({ ...ingredient, localId: crypto.randomUUID() })),
  } : { name: '', ingredients: [] }
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
    ingredients,
    updatedAt: serverTimestamp(),
  }
  if (editing.value) {
    await updateDoc(doc(db, 'meals', editing.value.id), {
      ...payload,
      description: deleteField(),
      tags: deleteField(),
    })
  } else {
    await setDoc(doc(db, 'meals', crypto.randomUUID()), { ...payload, createdAt: serverTimestamp() })
  }
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
  const planRef = doc(db, 'plan', key)
  const chosenMeal = meals.value.find(meal => meal.id === mealId)

  if (chosenMeal) {
    const plannedMeal = { mealId: chosenMeal.id, mealName: chosenMeal.name }
    if (plans.value[key]) {
      // Update only this meal slot, avoiding overwriting concurrent changes to other slots.
      await updateDoc(planRef, { [`meals.${type}`]: plannedMeal })
    } else {
      await setDoc(planRef, { date: key, meals: { [type]: plannedMeal } }, { merge: true })
    }
    return
  }

  // Firestore setDoc(..., { merge: true }) does not remove omitted nested map keys.
  // deleteField() explicitly removes the selected meal, including on today's plan.
  if (plans.value[key]?.meals?.[type]) {
    await updateDoc(planRef, { [`meals.${type}`]: deleteField() })
  }
}
function shiftWeek(delta: number) {
  const next = new Date(selectedDate.value)
  next.setDate(next.getDate() + delta * 7)
  if (dateKey(startOfWeek(next)) < planStartWeekKey) return
  selectedDate.value = next
}
function goToThisWeek() {
  selectedDate.value = new Date(planningReferenceDate)
}
const shoppingWeekDays = computed(() => {
  const monday = startOfWeek(today)
  if (shoppingWeekSelection.value === 'next') monday.setDate(monday.getDate() + 7)
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday)
    date.setDate(monday.getDate() + index)
    return date
  })
  return days.filter(date => dateKey(date) >= todayKey && dateKey(date) >= planStartKey)
})
function shoppingItemKey(name: string, storeId: string, unit: IngredientQuantityUnit) {
  const baseKey = `${selectedShoppingWeek.value}:${name.trim().toLocaleLowerCase()}:${storeId || 'none'}`
  // Keep legacy gram item keys stable so existing shopping statuses remain intact.
  return unit === 'unit' ? `${baseKey}:unit` : baseKey
}
function combineQuantities(values: string[], unit: IngredientQuantityUnit) {
  const quantities = values.map(value => Number(normalizeQuantity(value, unit))).filter(value => Number.isFinite(value) && value > 0)
  if (!quantities.length) return ''
  const total = quantities.reduce((sum, value) => sum + value, 0)
  return String(Number(total.toFixed(3)))
}
const shoppingItems = computed(() => {
  const aggregate = new Map<string, {
    name: string
    ingredientKey: string
    quantityUnit: IngredientQuantityUnit
    storeIds: Set<string>
    quantities: string[]
    occurrences: number
  }>()

  for (const date of shoppingWeekDays.value) {
    const day = plans.value[dateKey(date)]
    for (const planned of Object.values(day?.meals || {})) {
      if (!planned) continue
      const meal = meals.value.find(item => item.id === planned.mealId)
      for (const ingredient of meal?.ingredients || []) {
        const name = ingredient.name.trim()
        if (!name) continue
        const quantityUnit = ingredient.quantityUnit || 'g'
        const ingredientKey = ingredientKeyFor(name)
        const aggregateKey = `${ingredientKey}:${quantityUnit}`
        const existing = aggregate.get(aggregateKey)
        if (existing) {
          existing.occurrences += 1
          ingredient.storeIds.forEach(storeId => existing.storeIds.add(storeId))
          if (ingredient.quantity.trim()) existing.quantities.push(ingredient.quantity.trim())
        } else {
          aggregate.set(aggregateKey, {
            name,
            ingredientKey,
            quantityUnit,
            storeIds: new Set(ingredient.storeIds),
            quantities: ingredient.quantity.trim() ? [ingredient.quantity.trim()] : [],
            occurrences: 1,
          })
        }
      }
    }
  }

  // Combine store choices across all planned occurrences of an ingredient.
  const storesByIngredient = new Map<string, Set<string>>()
  for (const item of aggregate.values()) {
    const ids = storesByIngredient.get(item.ingredientKey) || new Set<string>()
    item.storeIds.forEach(storeId => ids.add(storeId))
    storesByIngredient.set(item.ingredientKey, ids)
  }

  const priorityRank = new Map<string, number>(orderedStores.value.map((store, index) => [store.id, index] as const))
  return [...aggregate.values()].map(item => {
    const allStoreIds = storesByIngredient.get(item.ingredientKey) || item.storeIds
    const availableStores = orderedStores.value.filter(store => allStoreIds.has(store.id))
    const preferredStore = availableStores[0]
    const storeId = preferredStore?.id || ''
    const key = shoppingItemKey(item.name, storeId, item.quantityUnit)
    return {
      ...item,
      storeIds: availableStores.map(store => store.id),
      storeOptions: availableStores,
      storeId,
      storeName: preferredStore?.name || t('noStore'),
      quantity: combineQuantities(item.quantities, item.quantityUnit),
      key,
      status: shoppingStatuses.value[key] || availableStores
        .map(store => shoppingItemKey(item.name, store.id, item.quantityUnit))
        .map(candidateKey => shoppingStatuses.value[candidateKey])
        .find(Boolean) || 'buy',
    }
  }).sort((a, b) => {
    const rankDifference = (priorityRank.get(a.storeId) ?? Number.MAX_SAFE_INTEGER)
      - (priorityRank.get(b.storeId) ?? Number.MAX_SAFE_INTEGER)
    return rankDifference || a.storeName.localeCompare(b.storeName) || a.name.localeCompare(b.name)
  })
})
const shoppingGroups = computed(() => {
  const groups = new Map<string, typeof shoppingItems.value>()
  for (const item of shoppingItems.value) {
    const group = groups.get(item.storeId) || []
    group.push(item)
    groups.set(item.storeId, group)
  }
  const priorityRank = new Map<string, number>(orderedStores.value.map((store, index) => [store.id, index] as const))
  return [...groups.entries()]
    .sort(([a], [b]) => (priorityRank.get(a) ?? Number.MAX_SAFE_INTEGER) - (priorityRank.get(b) ?? Number.MAX_SAFE_INTEGER))
    .map(([storeId, items]) => ({
      id: storeId,
      name: stores.value.find(store => store.id === storeId)?.name || t('noStore'),
      items,
    }))
})
const visibleShoppingGroups = computed(() => shoppingGroups.value
  .map(group => ({
    ...group,
    items: group.items.filter(item => !excludeAlreadyAtHome.value || item.status !== 'home'),
  }))
  .filter(group => group.items.length > 0))
async function setShoppingStatus(key: string, status: ShoppingStatus) {
  if (!db) return
  shoppingStatuses.value = { ...shoppingStatuses.value, [key]: status }
  await setDoc(doc(db, 'shoppingLists', 'current'), {
    statuses: shoppingStatuses.value,
    updatedAt: serverTimestamp(),
  }, { merge: true })
}
function openStorePriorityModal() {
  storePriorityDraft.value = orderedStores.value.map(store => store.id)
  storePriorityModal.value = true
}
function moveStorePriority(index: number, delta: number) {
  const target = index + delta
  if (target < 0 || target >= storePriorityDraft.value.length) return
  const next = [...storePriorityDraft.value]
  ;[next[index], next[target]] = [next[target], next[index]]
  storePriorityDraft.value = next
}
async function saveStorePriority() {
  if (!db) return
  const previous = [...storePriorityOrder.value]
  const next = [...new Set(storePriorityDraft.value.filter(id => stores.value.some(store => store.id === id)))]
  // Include any shop added while the modal was open, preserving the existing order.
  stores.value.forEach(store => { if (!next.includes(store.id)) next.push(store.id) })
  storePriorityOrder.value = next
  try {
    await setDoc(doc(db, 'shoppingLists', 'current'), {
      storePriorityOrder: next,
      updatedAt: serverTimestamp(),
    }, { merge: true })
    storePriorityModal.value = false
  } catch (error) {
    storePriorityOrder.value = previous
    console.error('Unable to save global store priority:', error)
  }
}
function ingredientKeyFor(name: string): string {
  // URL encoding keeps the normalized ingredient identity safe for map keys.
  return encodeURIComponent(name.trim().toLocaleLowerCase()).replace(/\./g, '%2E')
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
              <div class="meal-picker-actions today-picker-actions">
                <div class="custom-select-wrap" @click.stop>
                  <button class="custom-select-trigger" :aria-expanded="openPickerKey === `today-${type}`" @click="togglePicker(`today-${type}`)">
                    <span>{{ todayPlan.meals[type]?.mealName || meals.find(meal => meal.id === todayPlan.meals[type]?.mealId)?.name || t('selectDish') }}</span><ChevronRight class="select-chevron" :size="16" />
                  </button>
                  <div v-if="openPickerKey === `today-${type}`" class="custom-select-menu">
                    <button v-for="meal in meals" :key="meal.id" class="custom-select-option" :class="{ selected: todayPlan.meals[type]?.mealId === meal.id }" @click="pickPlanMeal(dateFromKey(todayKey), type, meal.id)">{{ meal.name }}</button>
                  </div>
                </div>
                <button v-if="todayPlan.meals[type]" type="button" class="icon-btn clear-meal-btn" :title="t('clearMeal')" :aria-label="t('clearMeal')" @click="clearPlanMeal(dateFromKey(todayKey), type)"><X :size="16" /></button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section v-else-if="activeTab === 'meals'" class="page">
        <div class="page-heading compact section-heading meals-page-heading">
          <h1>{{ t('meals') }}</h1>
          <div class="meals-heading-actions">
            <div class="search-box meals-search-box"><Search :size="17" /><input v-model="search" :placeholder="t('search')" /></div>
            <button class="primary-btn" @click="openMeal()"><Plus :size="17" />{{ t('addMeal') }}</button>
          </div>
        </div>
        <div v-if="sortedMeals.length" class="meals-list">
          <article v-for="(meal, index) in sortedMeals" :key="meal.id" class="meal-row">
            <div class="meal-row-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="meal-row-main">
              <h3>{{ meal.name }}</h3>
              <div v-if="meal.ingredients.length" class="ingredient-preview">
                <span v-for="ingredient in meal.ingredients" :key="`${ingredient.name}-${ingredient.storeIds.join(',')}`" class="ingredient-chip">
                  {{ ingredient.name }}<small v-if="ingredient.quantity">{{ quantityLabel(ingredient.quantity, ingredient.quantityUnit) }}</small><small v-if="ingredient.storeIds.length">· {{ storeNames(ingredient.storeIds) }}</small>
                </span>
              </div>
            </div>
            <div class="frequency">
              <div class="frequency-metric">
                <div class="frequency-label">{{ t('thisWeek') }}</div>
                <strong :class="frequencyTone(thisWeekFrequencyFor(meal.id))">{{ thisWeekFrequencyFor(meal.id) }}</strong>
              </div>
              <div class="frequency-metric">
                <div class="frequency-label">{{ t('averagePerWeek') }}</div>
                <strong :class="frequencyTone(averageFrequencyFor(meal.id))">{{ averageFrequencyFor(meal.id) }}</strong>
              </div>
            </div>
            <div class="row-actions"><button class="icon-btn" :title="t('editMeal')" @click="openMeal(meal)"><Pencil /></button><button class="icon-btn danger" :title="t('delete')" @click="removeMeal(meal)"><Trash2 /></button></div>
          </article>
        </div>
        <div v-else class="empty-collection"><div class="state-icon"><ChefHat /></div><h3>{{ t('noMeals') }}</h3><button class="text-btn" @click="openMeal()">{{ t('addMeal') }} +</button></div>
      </section>

      <section v-else-if="activeTab === 'plan'" class="page plan-page">
        <div class="page-heading compact plan-heading section-heading">
          <h1>{{ t('plan') }}</h1>
          <div class="plan-toolbar">
            <button class="icon-btn plan-arrow" :title="t('previous')" :disabled="!canGoToPreviousWeek" @click="shiftWeek(-1)"><ChevronLeft /></button>
            <button class="secondary-btn this-week-btn" @click="goToThisWeek">{{ t('thisWeek') }}</button>
            <button class="icon-btn plan-arrow" :title="t('next')" @click="shiftWeek(1)"><ChevronRight /></button>
          </div>
        </div>

        <div class="plan-day-list">
          <article v-for="day in weekDays" :key="dateKey(day)" :data-day-key="dateKey(day)" class="plan-day-row" :class="{ 'plan-day-row-today': dateKey(day) === todayKey, 'plan-day-row-focused': dateKey(day) === currentKey }">
            <header class="plan-day-heading">
              <div>
                <span class="day-weekday">{{ new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', { weekday: 'long' }).format(day) }}</span>
                <h2>{{ monthDay(day) }}</h2>
              </div>
              <span v-if="dateKey(day) === todayKey" class="today-marker">{{ t('today') }}</span>
            </header>
            <div class="plan-day-meals">
              <div v-for="(type, index) in mealTypes" :key="type" class="plan-meal-slot">
                <div class="plan-meal-meta">
                  <span class="day-meal-type">{{ t(type) }}</span>
                  <span class="day-meal-time">{{ mealTimes[index] }}</span>
                </div>
                <div class="meal-picker-actions day-meal-picker-actions">
                  <div class="custom-select-wrap day-meal-select" @click.stop>
                    <button class="custom-select-trigger" :aria-expanded="openPickerKey === `plan-${dateKey(day)}-${type}`" @click="togglePicker(`plan-${dateKey(day)}-${type}`)">
                      <span>{{ plannedMealName(dateKey(day), type) || t('selectDish') }}</span><ChevronRight class="select-chevron" :size="15" />
                    </button>
                    <div v-if="openPickerKey === `plan-${dateKey(day)}-${type}`" class="custom-select-menu">
                      <button v-for="meal in meals" :key="meal.id" class="custom-select-option" :class="{ selected: plans[dateKey(day)]?.meals[type]?.mealId === meal.id }" @click="pickPlanMeal(day, type, meal.id)">{{ meal.name }}</button>
                    </div>
                  </div>
                  <button v-if="plans[dateKey(day)]?.meals[type]" type="button" class="icon-btn clear-meal-btn" :title="t('clearMeal')" :aria-label="t('clearMeal')" @click="clearPlanMeal(day, type)"><X :size="15" /></button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section v-else class="page shopping-page">
        <div class="page-heading compact section-heading shopping-page-heading">
          <h1>{{ t('shopping') }}</h1>
          <div class="shopping-heading-actions">
            <label class="shopping-filter-toggle">
              <input v-model="excludeAlreadyAtHome" type="checkbox" />
              <span class="shopping-filter-switch" aria-hidden="true"><span></span></span>
              <span class="shopping-filter-label">{{ t('excludeAlreadyAtHome') }}</span>
            </label>
            <div class="custom-select-wrap shopping-week-selector" @click.stop>
              <button class="custom-select-trigger" :aria-expanded="openPickerKey === 'shopping-week'" @click="togglePicker('shopping-week')">
                <span>{{ shoppingWeekSelection === 'this' ? t('thisWeek') : t('next') }}</span><ChevronRight class="select-chevron" :size="15" />
              </button>
              <div v-if="openPickerKey === 'shopping-week'" class="custom-select-menu">
                <button class="custom-select-option" :class="{ selected: shoppingWeekSelection === 'this' }" @click="selectShoppingWeek('this')">{{ t('thisWeek') }}</button>
                <button class="custom-select-option" :class="{ selected: shoppingWeekSelection === 'next' }" @click="selectShoppingWeek('next')">{{ t('next') }}</button>
              </div>
            </div>
            <button class="secondary-btn store-priority-trigger" @click="openStorePriorityModal"><SlidersHorizontal :size="16" />{{ t('storePriorities') }}</button>
          </div>
        </div>
        <div v-if="visibleShoppingGroups.length" class="shopping-groups">
          <section v-for="group in visibleShoppingGroups" :key="group.id || 'no-store'" class="shopping-store-group">
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
        <div v-else class="empty-collection">
          <ShoppingBasket :size="30" />
          <h3>{{ shoppingItems.length && excludeAlreadyAtHome ? t('shoppingAllAtHome') : t('shoppingEmpty') }}</h3>
          <p class="muted">{{ shoppingItems.length && excludeAlreadyAtHome ? t('shoppingAllAtHomeHint') : t('shoppingEmptyHint') }}</p>
        </div>
      </section>
    </main>

    <div v-if="storePriorityModal" class="modal-backdrop" @click.self="storePriorityModal = false">
      <section class="meal-modal store-priority-modal">
        <div class="modal-header">
          <div><p class="eyebrow">{{ t('shopping') }}</p><h2>{{ t('storePriorities') }}</h2><p class="modal-description">{{ t('storePrioritiesHint') }}</p></div>
          <button class="icon-btn" :aria-label="t('close')" @click="storePriorityModal = false"><X /></button>
        </div>
        <div v-if="priorityModalStores.length" class="store-priority-list">
          <p class="priority-order-hint">{{ t('storePriorityOrderHint') }}</p>
          <article v-for="(store, index) in priorityModalStores" :key="store.id" class="store-priority-row">
            <span class="priority-position">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="store-priority-item-info">
              <h3>{{ store.name }}</h3>
              <p>{{ index === 0 ? t('highestPriority') : t('priorityNumber', { number: index + 1 }) }}</p>
            </div>
            <div class="priority-reorder-actions">
              <button type="button" class="icon-btn priority-move-btn" :disabled="index === 0" :aria-label="t('moveStoreUp')" :title="t('moveStoreUp')" @click="moveStorePriority(index, -1)"><ChevronUp :size="16" /></button>
              <button type="button" class="icon-btn priority-move-btn" :disabled="index === priorityModalStores.length - 1" :aria-label="t('moveStoreDown')" :title="t('moveStoreDown')" @click="moveStorePriority(index, 1)"><ChevronDown :size="16" /></button>
            </div>
          </article>
        </div>
        <div v-else class="empty-priority-state">
          <StoreIcon :size="26" />
          <h3>{{ t('noStores') }}</h3>
          <p>{{ t('storesHint') }}</p>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" @click="storePriorityModal = false">{{ t('cancel') }}</button>
          <button type="button" class="primary-btn" :disabled="!priorityModalStores.length" @click="saveStorePriority">{{ t('save') }}</button>
        </div>
      </section>
    </div>

    <div v-if="modal" class="modal-backdrop" @click.self="modal = false">
      <section class="meal-modal">
        <div class="modal-header"><div><p class="eyebrow">MEAL LIBRARY</p><h2>{{ editing ? t('editMeal') : t('addMeal') }}</h2></div><button class="icon-btn" @click="modal = false"><X /></button></div>
        <form @submit.prevent="saveMeal">
          <label class="form-field">{{ t('mealName') }}<input v-model="form.name" required maxlength="90" autofocus /></label>
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
                      <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'g' }" @click="pickQuantityUnit(ingredient, 'g')"><span class="quantity-option-symbol">g</span><span class="quantity-option-label">{{ t('quantityUnitGrams') }}</span><Check v-if="ingredient.quantityUnit === 'g'" :size="14" /></button>
                      <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'unit' }" @click="pickQuantityUnit(ingredient, 'unit')"><span class="quantity-option-symbol">{{ quantityUnitShort('unit') }}</span><span class="quantity-option-label">{{ t('quantityUnitPieces') }}</span><Check v-if="ingredient.quantityUnit === 'unit'" :size="14" /></button>
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
                <button
                  type="button"
                  class="text-btn add-store-link"
                  :class="{ active: addingStoreFor === ingredient.localId }"
                  :aria-expanded="addingStoreFor === ingredient.localId"
                  :aria-controls="`new-store-${ingredient.localId}`"
                  :aria-label="addingStoreFor === ingredient.localId ? t('close') : t('addStore')"
                  @click="addingStoreFor = addingStoreFor === ingredient.localId ? null : ingredient.localId"
                >
                  <X v-if="addingStoreFor === ingredient.localId" :size="14" />
                  <Plus v-else :size="14" />
                  <span>{{ t('addStore') }}</span>
                </button>
                <button type="button" class="icon-btn remove-ingredient" :title="t('remove')" @click="removeIngredient(ingredient.localId)"><Trash2 :size="15" /></button>
              </div>
              <div v-if="addingStoreFor === ingredient.localId" :id="`new-store-${ingredient.localId}`" class="new-store-form" role="region" :aria-label="t('addStore')">
                <input v-model="newStoreName" :placeholder="t('newStore')" maxlength="60" @keydown.enter.prevent="addStore(ingredient.localId)" />
                <button class="primary-btn small-btn" type="button" :disabled="!newStoreName.trim()" @click="addStore(ingredient.localId)">{{ t('saveStore') }}</button>
              </div>
            </div>
          </div>
          <div class="modal-actions"><button type="button" class="secondary-btn" @click="modal = false">{{ t('cancel') }}</button><button class="primary-btn" type="submit">{{ t('save') }}</button></div>
        </form>
      </section>
    </div>
  </div>
</template>
