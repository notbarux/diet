export type MealType = 'breakfast' | 'lunch' | 'snack' | 'dinner'
export type IngredientQuantityUnit = 'g' | 'unit'
export type NutrientKey = 'calories' | 'carbs' | 'protein' | 'fat' | 'fiber' | 'salt'
export type NutritionBasis = '100g' | 'unit'

export interface NutritionValues {
  calories: number | null
  carbs: number | null
  protein: number | null
  fat: number | null
  fiber: number | null
  salt: number | null
}

export interface NutritionMetricTotal {
  value: number | null
  knownIngredients: number
  totalIngredients: number
}

export type NutritionSummary = Record<NutrientKey, NutritionMetricTotal>

export interface MealIngredient {
  name: string
  /** Numeric quantity; stored as a string for form binding. */
  quantity: string
  /** Defaults to grams for documents created before unit selection was introduced. */
  quantityUnit: IngredientQuantityUnit
  storeIds: string[]
  nutrition?: NutritionValues
  nutritionBasis?: NutritionBasis
  /** Legacy Firestore field; normalized to storeIds when reading old documents. */
  storeId?: string
}

export interface Store {
  id: string
  name: string
}

export interface Meal {
  id: string
  name: string
  ingredients: MealIngredient[]
  /** Whether this meal can be varied; legacy meals default to false. */
  variable: boolean
  createdAt?: unknown
}

export interface PlannedMeal {
  mealId: string
  mealName: string
}

export interface DayPlan {
  id: string
  date: string
  meals: Partial<Record<MealType, PlannedMeal>>
}

export type ShoppingStatus = 'home' | 'bought' | 'buy'
