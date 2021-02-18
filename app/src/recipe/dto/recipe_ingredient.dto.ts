export class RecipeIngredientDto {
  id: number
  recipe_id: number
  material_name: string
  amount: string
  unit_type: string // TODO numberじゃない・・？
}
