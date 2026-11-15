export type MealType = 'breakfast' | 'lunch' | 'snack' | 'dinner'

export interface MealIngredient {
  name: string
  /** Numeric quantity expressed in grams; stored as a string for form binding. */
  quantity: string
  storeIds: string[]
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
  description: string
  tags: string[]
  ingredients: MealIngredient[]
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
