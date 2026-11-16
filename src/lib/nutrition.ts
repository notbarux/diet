import type {
  IngredientQuantityUnit,
  MealIngredient,
  NutrientKey,
  NutritionMetricTotal,
  NutritionSummary,
  NutritionValues,
} from '../types'

export const nutrientKeys: NutrientKey[] = ['calories', 'carbs', 'protein', 'fat', 'fiber', 'salt']

export function emptyNutrition(): NutritionValues {
  return { calories: null, carbs: null, protein: null, fat: null, fiber: null, salt: null }
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === 'object' && value !== null ? value as Record<string, unknown> : undefined
}

function numericValue(value: unknown): number | null {
  if (typeof value === 'object' && value !== null) {
    const record = value as Record<string, unknown>
    return numericValue(record.value_computed ?? record.value ?? record.value_string)
  }
  if (typeof value !== 'number' && typeof value !== 'string') return null
  if (String(value).trim() === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null
}

export function normalizeNutrition(raw: unknown): NutritionValues | undefined {
  const source = asRecord(raw)
  if (!source) return undefined
  const values = emptyNutrition()
  let hasValues = false
  for (const key of nutrientKeys) {
    const value = numericValue(source[key])
    values[key] = value
    if (value !== null) hasValues = true
  }
  return hasValues ? values : undefined
}

export function readOpenFoodFactsNutrition(productRaw: unknown): { productName: string; values: NutritionValues } {
  const product = asRecord(productRaw)
  if (!product) throw new Error('Invalid product response')
  const nutrition = asRecord(product.nutrition)
  const aggregated = asRecord(nutrition?.aggregated_set)
  const inputSets = Array.isArray(nutrition?.input_sets) ? nutrition.input_sets : []
  const sets = [aggregated, ...inputSets.map(asRecord)].filter(
    (item): item is Record<string, unknown> => !!item,
  )
  const per100g = sets.find(item => {
    const per = typeof item.per === 'string' ? item.per.toLowerCase().replace(/\\s/g, '') : '100g'
    return per === '100g'
  })
  const nestedNutrients = asRecord(per100g?.nutrients) || {}
  const flatNutrients = asRecord(product.nutriments) || {}
  const read = (...keys: string[]): number | null => {
    for (const key of keys) {
      const nested = numericValue(nestedNutrients[key])
      if (nested !== null) return nested
      const flat = numericValue(flatNutrients[`${key}_100g`] ?? flatNutrients[key])
      if (flat !== null) return flat
    }
    return null
  }
  let calories = read('energy-kcal')
  if (calories === null) {
    const kilojoules = read('energy-kj', 'energy')
    if (kilojoules !== null) calories = kilojoules / 4.184
  }
  const values: NutritionValues = {
    calories,
    carbs: read('carbohydrates', 'carbohydrates-total'),
    protein: read('proteins', 'protein'),
    fat: read('fat'),
    fiber: read('fiber', 'fibers'),
    salt: read('salt'),
  }
  if (nutrientKeys.every(key => values[key] === null)) throw new Error('No nutrition values found')
  return {
    productName: typeof product.product_name === 'string' ? product.product_name.trim() : '',
    values,
  }
}

export function summarizeNutrition(ingredients: readonly MealIngredient[]): NutritionSummary {
  const summary = {} as NutritionSummary
  for (const key of nutrientKeys) {
    let total = 0
    let knownIngredients = 0
    for (const ingredient of ingredients) {
      const quantityText = String(ingredient.quantity ?? '').trim()
      if (!quantityText) continue
      const quantity = Number(quantityText)
      if (!Number.isFinite(quantity) || quantity < 0) continue
      const basis = ingredient.nutritionBasis || '100g'
      const quantityUnit: IngredientQuantityUnit = ingredient.quantityUnit || 'g'
      const matchesBasis = (basis === '100g' && quantityUnit === 'g') ||
        (basis === 'unit' && quantityUnit === 'unit')
      if (!matchesBasis) continue
      const nutrientValue = ingredient.nutrition?.[key]
      if (typeof nutrientValue !== 'number' || !Number.isFinite(nutrientValue) || nutrientValue < 0) continue
      total += nutrientValue * (basis === '100g' ? quantity / 100 : quantity)
      knownIngredients += 1
    }
    const metric: NutritionMetricTotal = {
      value: knownIngredients ? Number(total.toFixed(2)) : null,
      knownIngredients,
      totalIngredients: ingredients.length,
    }
    summary[key] = metric
  }
  return summary
}
