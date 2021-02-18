import { Injectable } from '@nestjs/common'
import { CreateRecipeDto } from './dto/create-recipe.dto'

@Injectable()
export class RecipeService {
  async save(dto: CreateRecipeDto) {
    console.log('recipeSerivse: ', dto)
  }
}
