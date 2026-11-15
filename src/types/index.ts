export type MealType = 'breakfast' | 'lunch' | 'snack' | 'dinner'
export type ShoppingStatus = 'home' | 'bought' | 'todo'

export interface MealIngredient {
  name: string
  quantity: string
  storeId: string
}

export interface Store {
  id: string
  name: string
  createdAt?: unknown
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
