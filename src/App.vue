<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import packageJson from '../package.json'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { collection, deleteDoc, deleteField, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db, googleProvider, firebaseConfigured } from './lib/firebase'
import type {
  DayPlan,
  IngredientQuantityUnit,
  Meal,
  MealIngredient,
  MealType,
  NutrientKey,
  NutritionBasis,
  ShoppingStatus,
  Store,
} from './types'
import { emptyNutrition, normalizeNutrition, summarizeNutrition } from './lib/nutrition'
import {
  ChefHat, Utensils, Plus, ChevronLeft, ChevronRight, Sun, Moon,
  Languages, Search, LogOut, X, Trash2, Pencil, Sparkles, ShoppingBasket,
  List, Table2,
  Check, Store as StoreIcon, House, ShoppingCart, SlidersHorizontal, ChartPie,
  ChevronUp, ChevronDown, Eye,
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
const activeTab = ref<'home' | 'meals' | 'shopping' | 'insights'>('home')
const theme = ref<'dark' | 'light'>((localStorage.getItem('diet-theme') as 'dark' | 'light') || 'dark')
const search = ref('')
const excludeVariableMeals = ref(true)
const storedMobilePlanView = localStorage.getItem('diet-mobile-plan-view')
const mobilePlanView = ref<'inline' | 'table'>(storedMobilePlanView === 'table' ? 'table' : 'inline')
const modal = ref(false)
const editing = ref<Meal | null>(null)
const viewing = ref(false)
const openPickerKey = ref<string | null>(null)
const dropdownAnchor = ref<HTMLElement | null>(null)
const dropdownStyle = ref<Record<string, string>>({ visibility: 'hidden' })
const form = ref({
  name: '',
  variable: false,
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
const excludeAlreadyAtHome = ref(true)
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
  .filter(meal => !excludeVariableMeals.value || !meal.variable)
  .filter(meal => meal.name.toLowerCase().includes(search.value.toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name)))
const weekDays = computed(() => {
  const monday = startOfWeek(selectedDate.value)
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(monday)
    day.setDate(monday.getDate() + index)
    return day
  })
})
const nutrientMetrics = computed(() => [
  { key: 'calories' as const, label: t('calories'), shortLabel: 'kcal', unit: 'kcal' },
  { key: 'carbs' as const, label: t('carbohydrates'), shortLabel: t('carbsShort'), unit: 'g' },
  { key: 'protein' as const, label: t('protein'), shortLabel: t('proteinShort'), unit: 'g' },
  { key: 'fat' as const, label: t('fat'), shortLabel: t('fat'), unit: 'g' },
  { key: 'fiber' as const, label: t('fiber'), shortLabel: t('fiber'), unit: 'g' },
  { key: 'salt' as const, label: t('salt'), shortLabel: t('salt'), unit: 'g' },
])
const insightDays = computed(() => weekDays.value.map(date => {
  const key = dateKey(date)
  const plannedMeals = mealTypes.flatMap(type => {
    const planned = plans.value[key]?.meals?.[type]
    if (!planned) return []
    const meal = meals.value.find(item => item.id === planned.mealId)
    const ingredients = meal?.ingredients || []
    return [{
      type,
      name: meal?.name || planned.mealName,
      ingredients,
      nutrition: summarizeNutrition(ingredients),
    }]
  })
  return {
    date,
    key,
    meals: plannedMeals,
    nutrition: summarizeNutrition(plannedMeals.flatMap(meal => meal.ingredients)),
  }
}))
const insightWeekNutrition = computed(() =>
  summarizeNutrition(insightDays.value.flatMap(day => day.meals.flatMap(meal => meal.ingredients))),
)
const dishNutrition = computed(() => meals.value.map(meal => ({
  id: meal.id,
  name: meal.name,
  nutrition: summarizeNutrition(meal.ingredients),
  hasNutrition: mealHasNutrition(meal),
})))
const insightWeekRange = computed(() =>
  `${monthDay(weekDays.value[0])} – ${monthDay(weekDays.value[6])}`,
)
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
    if (typeof item === 'string') return { name: item, quantity: '', quantityUnit: 'g' as const, storeIds: [], nutritionBasis: '100g' as const }
    if (item && typeof item === 'object') {
      const ingredient = item as {
        name?: unknown
        quantity?: unknown
        quantityUnit?: unknown
        storeId?: unknown
        storeIds?: unknown
        nutrition?: unknown
        nutritionBasis?: unknown
      }
      const legacyStoreIds = typeof ingredient.storeId === 'string' && ingredient.storeId ? [ingredient.storeId] : []
      const storeIds = Array.isArray(ingredient.storeIds)
        ? ingredient.storeIds.filter((storeId): storeId is string => typeof storeId === 'string' && !!storeId)
        : legacyStoreIds
      const quantityUnit: IngredientQuantityUnit = ingredient.quantityUnit === 'unit' ? 'unit' : 'g'
      const nutrition = normalizeNutrition(ingredient.nutrition)
      const nutritionBasis: NutritionBasis = ingredient.nutritionBasis === 'unit' ||
        (!ingredient.nutritionBasis && quantityUnit === 'unit') ? 'unit' : '100g'
      return {
        name: typeof ingredient.name === 'string' ? ingredient.name : '',
        quantity: normalizeQuantity(ingredient.quantity, quantityUnit),
        quantityUnit,
        storeIds: [...new Set(storeIds)],
        nutritionBasis,
        ...(nutrition ? { nutrition } : {}),
      }
    }
    return { name: '', quantity: '', quantityUnit: 'g' as const, storeIds: [], nutritionBasis: '100g' as const }
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
        variable: data.variable === true,
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
  dropdownAnchor.value = null
  dropdownStyle.value = { visibility: 'hidden' }
}
function closePickerOnOutsideClick() {
  closePicker()
}
function updateDropdownPosition() {
  const anchor = dropdownAnchor.value
  if (!anchor || !anchor.isConnected || !openPickerKey.value) return

  const rect = anchor.getBoundingClientRect()
  const menu = document.querySelector<HTMLElement>('.dropdown-menu-portal')
  const isQuantityMenu = openPickerKey.value.startsWith('quantity-')
  const preferredMaxHeight = isQuantityMenu ? 140 : 245
  const menuHeight = Math.min(menu?.scrollHeight || preferredMaxHeight, preferredMaxHeight)
  const gap = 7
  const viewportPadding = 8
  const spaceBelow = Math.max(0, window.innerHeight - rect.bottom - gap - viewportPadding)
  const spaceAbove = Math.max(0, rect.top - gap - viewportPadding)
  const openAbove = spaceBelow < menuHeight && spaceAbove > spaceBelow
  const availableHeight = openAbove ? spaceAbove : spaceBelow
  const maxHeight = Math.min(preferredMaxHeight, availableHeight)
  const visibleMenuHeight = Math.min(menuHeight, maxHeight)
  const top = openAbove
    ? Math.max(viewportPadding, rect.top - gap - visibleMenuHeight)
    : Math.min(window.innerHeight - viewportPadding, rect.bottom + gap)
  const width = Math.min(isQuantityMenu ? 172 : rect.width, window.innerWidth - viewportPadding * 2)
  const preferredLeft = isQuantityMenu ? rect.right - width : rect.left
  const left = Math.max(viewportPadding, Math.min(preferredLeft, window.innerWidth - width - viewportPadding))

  dropdownStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    maxHeight: `${maxHeight}px`,
    visibility: 'visible',
  }
}

onMounted(() => {
  document.addEventListener('click', closePickerOnOutsideClick)
  document.addEventListener('scroll', updateDropdownPosition, true)
  window.addEventListener('resize', updateDropdownPosition)
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
  document.removeEventListener('scroll', updateDropdownPosition, true)
  window.removeEventListener('resize', updateDropdownPosition)
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
watch(mobilePlanView, value => localStorage.setItem('diet-mobile-plan-view', value))

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
async function togglePicker(key: string, event: MouseEvent) {
  if (openPickerKey.value === key) {
    closePicker()
    return
  }

  openPickerKey.value = key
  dropdownAnchor.value = event.currentTarget as HTMLElement
  dropdownStyle.value = { visibility: 'hidden' }
  await nextTick()
  updateDropdownPosition()
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
function plannedMeal(dayKey: string, type: MealType): Meal | undefined {
  const mealId = plans.value[dayKey]?.meals?.[type]?.mealId
  return meals.value.find(meal => meal.id === mealId)
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
function ingredientHasNutrition(ingredient: Pick<MealIngredient, 'nutrition'>): boolean {
  return !!normalizeNutrition(ingredient.nutrition)
}
function mealHasNutrition(meal: Pick<Meal, 'ingredients'>): boolean {
  return meal.ingredients.length > 0 && meal.ingredients.every(ingredientHasNutrition)
}
function pickQuantityUnit(
  ingredient: Pick<MealIngredient, 'quantityUnit' | 'nutrition' | 'nutritionBasis'>,
  unit: IngredientQuantityUnit,
) {
  ingredient.quantityUnit = unit
  const hasNutritionValues = !!ingredient.nutrition &&
    Object.values(ingredient.nutrition).some(value => typeof value === 'number')
  if (!hasNutritionValues) ingredient.nutritionBasis = unit === 'g' ? '100g' : 'unit'
  closePicker()
}
function setIngredientNutrition(ingredient: MealIngredient & { localId: string }, key: NutrientKey, event: Event) {
  const raw = (event.target as HTMLInputElement).value
  const value = raw.trim() === '' ? null : Number(raw)
  if (value !== null && (!Number.isFinite(value) || value < 0)) return
  ingredient.nutrition = { ...emptyNutrition(), ...(ingredient.nutrition || {}), [key]: value }
}
function formatNutritionValue(value: number | null, unit: string): string {
  if (value === null || !Number.isFinite(value)) return '—'
  const rounded = unit === 'kcal' ? Math.round(value) : Number(value.toFixed(1))
  return `${new Intl.NumberFormat(locale.value === 'it' ? 'it-IT' : 'en-US').format(rounded)} ${unit}`
}
function changeIngredientNutritionBasis(ingredient: MealIngredient, event: Event) {
  const basis = (event.target as HTMLSelectElement).value
  if (basis !== '100g' && basis !== 'unit') return
  if (ingredient.nutritionBasis === basis) return
  ingredient.nutritionBasis = basis
  ingredient.nutrition = undefined
}
function nutritionCoverageText(metric: { value: number | null; knownIngredients: number; totalIngredients: number }): string {
  if (!metric.totalIngredients || !metric.knownIngredients) return t('nutritionMissing')
  if (metric.knownIngredients < metric.totalIngredients) {
    return t('nutritionPartialCoverage', { known: metric.knownIngredients, total: metric.totalIngredients })
  }
  return t('nutritionComplete')
}

function openMeal(meal?: Meal, readOnly = false) {
  viewing.value = readOnly
  editing.value = meal || null
  form.value = meal ? {
    name: meal.name,
    variable: meal.variable,
    ingredients: normalizedIngredients(meal.ingredients).map(ingredient => ({ ...ingredient, localId: crypto.randomUUID() })),
  } : { name: '', variable: false, ingredients: [] }
  addingStoreFor.value = null
  newStoreName.value = ''
  openPickerKey.value = null
  modal.value = true
}
function viewMeal(meal: Meal) {
  openMeal(meal, true)
}
function viewPlannedMeal(day: Date, type: MealType) {
  const mealId = plans.value[dateKey(day)]?.meals?.[type]?.mealId
  const meal = meals.value.find(item => item.id === mealId)
  if (meal) viewMeal(meal)
}
function addIngredient() {
  form.value.ingredients.push({
    localId: crypto.randomUUID(),
    name: '',
    quantity: '',
    quantityUnit: 'g',
    storeIds: [],
    nutritionBasis: '100g',
  })
}
function removeIngredient(localId: string) {
  form.value.ingredients = form.value.ingredients.filter(ingredient => ingredient.localId !== localId)
  if (addingStoreFor.value === localId) addingStoreFor.value = null
}
async function updateMealVariable(meal: Meal) {
  if (!db) return
  const previousValue = !meal.variable
  try {
    await updateDoc(doc(db, 'meals', meal.id), { variable: meal.variable })
  } catch (error) {
    meal.variable = previousValue
    console.error('Unable to update meal variability:', error)
  }
}

async function saveMeal() {
  if (!db || !form.value.name.trim()) return
  const ingredients = form.value.ingredients
    .filter(ingredient => ingredient.name.trim())
    .map((ingredient) => {
      const nutrition = normalizeNutrition(ingredient.nutrition)
      return {
        name: ingredient.name.trim(),
        quantity: normalizeQuantity(ingredient.quantity, ingredient.quantityUnit),
        quantityUnit: ingredient.quantityUnit,
        storeIds: [...new Set(ingredient.storeIds)],
        nutritionBasis: ingredient.nutritionBasis || (ingredient.quantityUnit === 'g' ? '100g' : 'unit'),
        ...(nutrition ? { nutrition } : {}),
      }
    })
  const payload = {
    name: form.value.name.trim(),
    ingredients,
    variable: form.value.variable,
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
      if (!meal || meal.variable) continue
      for (const ingredient of meal.ingredients) {
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
        <button v-for="tab in ['home', 'meals', 'shopping', 'insights'] as const" :key="tab" :class="['top-nav-item', { active: activeTab === tab }]" @click="activeTab = tab">
          <House v-if="tab === 'home'" /><ChefHat v-else-if="tab === 'meals'" /><ShoppingBasket v-else-if="tab === 'shopping'" /><ChartPie v-else />
          <span>{{ t(tab) }}</span>
        </button>
      </nav>
    </header>

    <main class="main-content">
      <section v-if="activeTab === 'home'" class="page plan-page">
        <div class="page-heading compact plan-heading section-heading">
          <h1>{{ t('home') }}</h1>
          <div class="plan-toolbar">
            <button class="icon-btn plan-arrow" :title="t('previous')" :disabled="!canGoToPreviousWeek" @click="shiftWeek(-1)"><ChevronLeft /></button>
            <button class="secondary-btn this-week-btn" @click="goToThisWeek">{{ t('thisWeek') }}</button>
            <button class="icon-btn plan-arrow" :title="t('next')" @click="shiftWeek(1)"><ChevronRight /></button>
          </div>
        </div>
        <div class="mobile-plan-view-toolbar" role="group" :aria-label="t('weekView')">
          <button type="button" class="mobile-plan-view-button" :class="{ active: mobilePlanView === 'inline' }" :aria-pressed="mobilePlanView === 'inline'" :title="t('inlineView')" :aria-label="t('inlineView')" @click="mobilePlanView = 'inline'"><List :size="16" /></button>
          <button type="button" class="mobile-plan-view-button" :class="{ active: mobilePlanView === 'table' }" :aria-pressed="mobilePlanView === 'table'" :title="t('tableView')" :aria-label="t('tableView')" @click="mobilePlanView = 'table'"><Table2 :size="16" /></button>
        </div>

        <div class="plan-day-list" :class="{ 'plan-day-list-table': mobilePlanView === 'table' }">
          <div v-if="mobilePlanView === 'table'" class="plan-table-header">
            <span class="plan-table-day-label">{{ t('day') }}</span>
            <span v-for="type in mealTypes" :key="type">{{ t(type) }}</span>
          </div>
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
                    <button class="custom-select-trigger" :aria-expanded="openPickerKey === `plan-${dateKey(day)}-${type}`" @click="togglePicker(`plan-${dateKey(day)}-${type}`, $event)">
                      <span>{{ plannedMealName(dateKey(day), type) || t('selectDish') }}</span><ChevronRight class="select-chevron" :size="15" />
                    </button>
                    <Teleport to="body">
                      <div v-if="openPickerKey === `plan-${dateKey(day)}-${type}`" class="custom-select-menu dropdown-menu-portal" :style="dropdownStyle" @click.stop>
                        <button v-for="meal in meals" :key="meal.id" class="custom-select-option" :class="{ selected: plans[dateKey(day)]?.meals[type]?.mealId === meal.id }" @click="pickPlanMeal(day, type, meal.id)">{{ meal.name }}</button>
                      </div>
                    </Teleport>
                  </div>
                  <div v-if="plannedMeal(dateKey(day), type)" class="day-meal-actions">
                    <button type="button" class="icon-btn day-meal-view-btn" :title="t('viewMeal')" :aria-label="t('viewMeal')" @click="viewPlannedMeal(day, type)"><Eye :size="15" /></button>
                    <button type="button" class="icon-btn clear-meal-btn" :title="t('clearMeal')" :aria-label="t('clearMeal')" @click="clearPlanMeal(day, type)"><X :size="15" /></button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>


      <section v-else-if="activeTab === 'meals'" class="page">
        <div class="page-heading compact section-heading meals-page-heading">
          <h1>{{ t('meals') }}</h1>
          <div class="meals-heading-actions">
            <label class="meals-filter-toggle">
              <input v-model="excludeVariableMeals" type="checkbox" />
              <span class="meals-filter-switch" aria-hidden="true"><span></span></span>
              <span>{{ t('excludeVariableMeals') }}</span>
            </label>
            <div class="search-box meals-search-box"><Search :size="17" /><input v-model="search" :placeholder="t('search')" /></div>
            <button class="primary-btn" @click="openMeal()"><Plus :size="17" />{{ t('addMeal') }}</button>
          </div>
        </div>
        <div v-if="sortedMeals.length" class="meals-list">
          <article v-for="(meal, index) in sortedMeals" :key="meal.id" class="meal-row">
            <div class="meal-row-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="meal-row-main">
              <h3 class="meal-title">
                {{ meal.name }}
                <span v-if="mealHasNutrition(meal)" class="meal-nutrition-indicator" :title="t('nutritionValuesPresent')" :aria-label="t('nutritionValuesPresent')" role="img">
                  <Check :size="15" />
                </span>
              </h3>
              <div v-if="meal.ingredients.length" class="ingredient-preview">
                <span v-for="ingredient in meal.ingredients" :key="`${ingredient.name}-${ingredient.storeIds.join(',')}`" class="ingredient-chip">
                  {{ ingredient.name }}<small v-if="ingredient.quantity">{{ quantityLabel(ingredient.quantity, ingredient.quantityUnit) }}</small><small v-if="ingredient.storeIds.length">· {{ storeNames(ingredient.storeIds) }}</small>
                </span>
              </div>
            </div>
            <div class="meal-controls">
              <div class="frequency">
                <label class="meal-variable-toggle">
                  <input v-model="meal.variable" type="checkbox" :aria-label="t('variableMeal')" @change="updateMealVariable(meal)" />
                  <span class="meal-variable-switch" aria-hidden="true"><span></span></span>
                  <span>{{ t('variableMeal') }}</span>
                </label>
                <div class="frequency-metric">
                  <div class="frequency-label">{{ t('thisWeek') }}</div>
                  <strong :class="frequencyTone(thisWeekFrequencyFor(meal.id))">{{ thisWeekFrequencyFor(meal.id) }}</strong>
                </div>
                <div class="frequency-metric">
                  <div class="frequency-label">{{ t('averagePerWeek') }}</div>
                  <strong :class="frequencyTone(averageFrequencyFor(meal.id))">{{ averageFrequencyFor(meal.id) }}</strong>
                </div>
              </div>
              <div class="row-actions">
                <button type="button" class="icon-btn meal-action-btn meal-action-view" :title="t('viewMeal')" :aria-label="t('viewMeal')" @click="viewMeal(meal)"><Eye /></button>
                <button type="button" class="icon-btn meal-action-btn meal-action-edit" :title="t('editMeal')" :aria-label="t('editMeal')" @click="openMeal(meal)"><Pencil /></button>
                <button type="button" class="icon-btn meal-action-btn meal-action-delete" :title="t('delete')" :aria-label="t('delete')" @click="removeMeal(meal)"><Trash2 /></button>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="empty-collection"><div class="state-icon"><ChefHat /></div><h3>{{ t('noMeals') }}</h3><button class="text-btn" @click="openMeal()">{{ t('addMeal') }} +</button></div>
      </section>

      <section v-else-if="activeTab === 'insights'" class="page insights-page">
        <div class="page-heading compact section-heading insights-heading">
          <div>
            <h1>{{ t('insights') }}</h1>
            <p class="insights-intro">{{ t('insightsIntro') }}</p>
          </div>
          <span class="insights-week-label">{{ insightWeekRange }}</span>
        </div>
        <section class="insights-section">
          <div class="insights-section-heading"><h2>{{ t('weekNutrition') }}</h2><span>{{ t('selectedWeek') }}</span></div>
          <div class="insights-summary-grid">
            <article v-for="metric in nutrientMetrics" :key="metric.key" class="insight-metric-card">
              <span>{{ metric.label }}</span>
              <strong>{{ formatNutritionValue(insightWeekNutrition[metric.key].value, metric.unit) }}</strong>
              <small>{{ nutritionCoverageText(insightWeekNutrition[metric.key]) }}</small>
            </article>
          </div>
        </section>
        <section class="insights-section">
          <div class="insights-section-heading"><h2>{{ t('dailyMeals') }}</h2><span>{{ t('dailyMealsHint') }}</span></div>
          <div class="insights-days">
            <article v-for="day in insightDays" :key="day.key" class="insight-day-card">
              <header class="insight-day-heading">
                <div><span>{{ new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', { weekday: 'long' }).format(day.date) }}</span><h3>{{ monthDay(day.date) }}</h3></div>
                <strong>{{ formatNutritionValue(day.nutrition.calories.value, 'kcal') }}</strong>
              </header>
              <div v-if="day.meals.length" class="insight-day-meals">
                <article v-for="meal in day.meals" :key="meal.type" class="insight-meal-row">
                  <div class="insight-meal-title"><span>{{ t(meal.type) }}</span><strong>{{ meal.name }}</strong></div>
                  <div class="insight-nutrient-values">
                    <span v-for="metric in nutrientMetrics" :key="metric.key">
                      <small>{{ metric.shortLabel }}</small>
                      <strong>{{ formatNutritionValue(meal.nutrition[metric.key].value, metric.unit) }}</strong>
                      <em>{{ meal.nutrition[metric.key].knownIngredients }}/{{ meal.nutrition[metric.key].totalIngredients }}</em>
                    </span>
                  </div>
                </article>
              </div>
              <p v-else class="insight-empty-day">{{ t('noMealsPlanned') }}</p>
            </article>
          </div>
        </section>
        <section class="insights-section">
          <div class="insights-section-heading"><h2>{{ t('dishNutrition') }}</h2><span>{{ t('dishNutritionHint') }}</span></div>
          <div v-if="dishNutrition.length" class="insights-dish-grid">
            <article v-for="dish in dishNutrition" :key="dish.id" class="insight-dish-card">
              <h3>{{ dish.name }}</h3>
              <div v-if="dish.hasNutrition" class="insight-nutrient-values dish-nutrient-values">
                <span v-for="metric in nutrientMetrics" :key="metric.key">
                  <small>{{ metric.shortLabel }}</small>
                  <strong>{{ formatNutritionValue(dish.nutrition[metric.key].value, metric.unit) }}</strong>
                  <em>{{ dish.nutrition[metric.key].knownIngredients }}/{{ dish.nutrition[metric.key].totalIngredients }}</em>
                </span>
              </div>
            </article>
          </div>
          <div v-else class="empty-collection"><ChefHat :size="28" /><h3>{{ t('noMeals') }}</h3></div>
        </section>
        <p class="insights-footnote">{{ t('nutritionCalculationNote') }}</p>
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
              <button class="custom-select-trigger" :aria-expanded="openPickerKey === 'shopping-week'" @click="togglePicker('shopping-week', $event)">
                <span>{{ shoppingWeekSelection === 'this' ? t('thisWeek') : t('next') }}</span><ChevronRight class="select-chevron" :size="15" />
              </button>
              <Teleport to="body">
                <div v-if="openPickerKey === 'shopping-week'" class="custom-select-menu dropdown-menu-portal" :style="dropdownStyle" @click.stop>
                  <button class="custom-select-option" :class="{ selected: shoppingWeekSelection === 'this' }" @click="selectShoppingWeek('this')">{{ t('thisWeek') }}</button>
                  <button class="custom-select-option" :class="{ selected: shoppingWeekSelection === 'next' }" @click="selectShoppingWeek('next')">{{ t('next') }}</button>
                </div>
              </Teleport>
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
      <section class="meal-modal" :class="{ 'meal-view-modal': viewing }">
        <div class="modal-header"><div><p class="eyebrow">MEAL LIBRARY</p><h2>{{ viewing ? form.name : (editing ? t('editMeal') : t('addMeal')) }}</h2></div><button class="icon-btn" :aria-label="t('close')" @click="modal = false"><X /></button></div>
        <form @submit.prevent="saveMeal">
          <div v-if="viewing" class="meal-view-content">
            <div class="ingredients-editor-heading meal-view-section-heading"><h3>{{ t('ingredients') }}</h3></div>
            <p v-if="!form.ingredients.length" class="empty-form-hint">{{ t('ingredientsEmpty') }}</p>
            <article
              v-for="ingredient in form.ingredients"
              :key="ingredient.localId"
              class="meal-view-ingredient"
              :class="ingredientHasNutrition(ingredient) ? 'has-nutrition' : 'missing-nutrition'"
            >
              <div class="meal-view-ingredient-heading">
                <h3>{{ ingredient.name }}</h3>
                <span v-if="ingredient.quantity" class="meal-view-quantity">{{ quantityLabel(ingredient.quantity, ingredient.quantityUnit) }}</span>
              </div>
              <div class="meal-view-nutrition">
                <div class="meal-view-nutrition-basis">{{ t('nutrition') }} · {{ t('nutritionPer') }} {{ ingredient.nutritionBasis === 'unit' ? t('perUnit') : t('per100g') }}</div>
                <div v-if="ingredientHasNutrition(ingredient)" class="meal-view-nutrition-values">
                  <span v-for="metric in nutrientMetrics" :key="metric.key">
                    <small>{{ metric.shortLabel }}</small>
                    <strong>{{ formatNutritionValue(ingredient.nutrition?.[metric.key] ?? null, metric.unit) }}</strong>
                  </span>
                </div>
                <p v-else class="meal-view-no-nutrition">{{ t('nutritionMissing') }}</p>
              </div>
            </article>
          </div>
          <fieldset v-else class="meal-editor-fieldset">
          <label class="form-field">{{ t('mealName') }}<input v-model="form.name" required maxlength="90" autofocus /></label>
          <div class="ingredients-editor">
            <div class="ingredients-editor-heading"><h3>{{ t('ingredients') }}</h3><button v-if="!viewing" type="button" class="secondary-btn small-btn" @click="addIngredient"><Plus :size="15" />{{ t('addIngredient') }}</button></div>
            <p v-if="!form.ingredients.length" class="empty-form-hint">{{ t('ingredientsEmpty') }}</p>
            <div v-for="ingredient in form.ingredients" :key="ingredient.localId" class="ingredient-editor-row">
              <div class="ingredient-editor-fields">
                <label class="form-field ingredient-name-field">{{ t('ingredientName') }}<input v-model="ingredient.name" required :placeholder="t('ingredientName')" /></label>
                <div class="form-field ingredient-quantity-field">
                  <span>{{ t('quantity') }}</span>
                  <span class="quantity-input-wrap" @click.stop>
                    <input :value="ingredient.quantity" :aria-label="t('quantity')" type="number" min="0" :step="ingredient.quantityUnit === 'unit' ? 1 : 'any'" :inputmode="ingredient.quantityUnit === 'unit' ? 'numeric' : 'decimal'" :placeholder="ingredient.quantityUnit === 'unit' ? '1' : '200'" @input="ingredient.quantity = ($event.target as HTMLInputElement).value" />
                    <button type="button" class="quantity-unit quantity-unit-select" :aria-expanded="openPickerKey === `quantity-${ingredient.localId}`" @click="togglePicker(`quantity-${ingredient.localId}`, $event)">{{ quantityUnitShort(ingredient.quantityUnit) }}<ChevronRight :size=12 /></button>
                    <Teleport to="body">
                      <div v-if="openPickerKey === `quantity-${ingredient.localId}`" class="quantity-unit-menu dropdown-menu-portal" :style="dropdownStyle" @click.stop>
                        <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'g' }" @click="pickQuantityUnit(ingredient, 'g')"><span class="quantity-option-symbol">g</span><span class="quantity-option-label">{{ t('quantityUnitGrams') }}</span><Check v-if="ingredient.quantityUnit === 'g'" :size="14" /></button>
                        <button type="button" class="quantity-unit-option" :class="{ selected: ingredient.quantityUnit === 'unit' }" @click="pickQuantityUnit(ingredient, 'unit')"><span class="quantity-option-symbol">{{ quantityUnitShort('unit') }}</span><span class="quantity-option-label">{{ t('quantityUnitPieces') }}</span><Check v-if="ingredient.quantityUnit === 'unit'" :size="14" /></button>
                      </div>
                    </Teleport>
                  </span>
                </div>
              </div>
              <div class="store-picker-line">
                <span class="field-caption">{{ t('store') }}</span>
                <div class="custom-select-wrap store-select-wrap" @click.stop>
                  <button type="button" class="custom-select-trigger" :aria-expanded="openPickerKey === `store-${ingredient.localId}`" @click="togglePicker(`store-${ingredient.localId}`, $event)">
                    <span>{{ storeSelectionLabel(ingredient.storeIds) }}</span><ChevronRight class="select-chevron" :size="15" />
                  </button>
                  <Teleport to="body">
                    <div v-if="openPickerKey === `store-${ingredient.localId}`" class="custom-select-menu dropdown-menu-portal" :style="dropdownStyle" @click.stop>
                      <button type="button" class="custom-select-option" :class="{ selected: !ingredient.storeIds.length }" @click="pickStore(ingredient, '')">{{ t('noStore') }}<Check v-if="!ingredient.storeIds.length" :size="14" /></button>
                      <button v-for="store in stores" :key="store.id" type="button" class="custom-select-option multi-select-option" :class="{ selected: ingredient.storeIds.includes(store.id) }" @click="pickStore(ingredient, store.id)">{{ store.name }}<Check v-if="ingredient.storeIds.includes(store.id)" :size="14" /></button>
                    </div>
                  </Teleport>
                </div>
                <button
                  type="button"
                  v-if="!viewing"
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
                <button v-if="!viewing" type="button" class="icon-btn remove-ingredient" :title="t('remove')" @click="removeIngredient(ingredient.localId)"><Trash2 :size="15" /></button>
              </div>
              <div v-if="!viewing && addingStoreFor === ingredient.localId" :id="`new-store-${ingredient.localId}`" class="new-store-form" role="region" :aria-label="t('addStore')">
                <input v-model="newStoreName" :placeholder="t('newStore')" maxlength="60" @keydown.enter.prevent="addStore(ingredient.localId)" />
                <button class="primary-btn small-btn" type="button" :disabled="!newStoreName.trim()" @click="addStore(ingredient.localId)">{{ t('saveStore') }}</button>
              </div>
              <details class="ingredient-nutrition-editor" :class="ingredientHasNutrition(ingredient) ? 'has-nutrition' : 'missing-nutrition'">
                <summary><span>{{ t('nutrition') }}</span><small>{{ t('nutritionPer') }} {{ ingredient.nutritionBasis === 'unit' ? t('perUnit') : t('per100g') }}</small></summary>
                <div class="nutrition-editor-content">
                  <div class="nutrition-basis-row">
                    <label :for="'nutrition-basis-' + ingredient.localId">{{ t('nutritionBasis') }}</label>
                    <select :id="'nutrition-basis-' + ingredient.localId" :value="ingredient.nutritionBasis || '100g'" @change="changeIngredientNutritionBasis(ingredient, $event)">
                      <option value="100g">{{ t('per100g') }}</option><option value="unit">{{ t('perUnit') }}</option>
                    </select>
                  </div>
                  <p v-if="(ingredient.nutritionBasis === '100g' && ingredient.quantityUnit === 'unit') || (ingredient.nutritionBasis === 'unit' && ingredient.quantityUnit === 'g')" class="nutrition-unit-warning">{{ t('nutritionUnitMismatch') }}</p>
                  <div class="nutrition-input-grid">
                    <label v-for="metric in nutrientMetrics" :key="metric.key">
                      <span>{{ metric.label }} <small>({{ metric.unit }})</small></span>
                      <input type="number" min="0" step="any" :value="ingredient.nutrition?.[metric.key] ?? ''" @input="setIngredientNutrition(ingredient, metric.key, $event)" />
                    </label>
                  </div>
                  <p class="nutrition-editor-hint">{{ t('nutritionEntryHint') }} {{ t('nutritionBasisChangeHint') }}</p>
                </div>
              </details>
            </div>
          </div>
          </fieldset>
          <div v-if="!viewing" class="modal-actions"><button type="button" class="secondary-btn" @click="modal = false">{{ t('cancel') }}</button><button class="primary-btn" type="submit">{{ t('save') }}</button></div>
        </form>
      </section>
    </div>
  </div>
</template>
