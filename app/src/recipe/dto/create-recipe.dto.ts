import { RecipeIngredientDto } from './recipe_ingredient.dto'
import { RecipeMethodDto } from './recipe_method.dto'

export class CreateRecipeDto {
  name: string
  description: string
  recipe_ingredients: RecipeIngredientDto[]
  recipe_methods: RecipeMethodDto[]
}
