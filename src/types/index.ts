export type MealType = 'breakfast'|'lunch'|'snack'|'dinner'
export interface Meal { id:string; name:string; description:string; tags:string[]; ingredients:string[]; createdAt?:unknown }
export interface PlannedMeal { mealId:string; mealName:string }
export interface DayPlan { id:string; date:string; meals:Partial<Record<MealType,PlannedMeal>> }
