import { Injectable } from '@nestjs/common'
import { Recipe } from 'src/entities/recipe.entity'
// import { RecipeIngredient } from 'src/entities/recipe_ingredient.entity'
// import { RecipeMethod } from 'src/entities/recipe_method.entity'
import { getRepository } from 'typeorm'
import { CreateRecipeDto } from './dto/create-recipe.dto'
// import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class RecipeService {
  constructor() {} // private readonly recipeRepository: Repository<Recipe>,

  async save(dto: CreateRecipeDto) {
    console.log('recipeSerivse: ', dto)
    const recipeRepository = getRepository(Recipe)
    const entity = new Recipe()
    entity.name = dto.name
    entity.description = dto.description
    entity.recipe_ingredients = dto.recipe_ingredients
    entity.recipe_methods = dto.recipe_methods
    console.log('entity: ', entity)
    const result = await recipeRepository.save(entity)
    return result
  }

  async findAll() {
    const recipeRepository = getRepository(Recipe)
    return recipeRepository.find()
  }

  async findById(id: number) {
    console.log('findbyid id: ', id)
    const recipeRepository = getRepository(Recipe)
    return recipeRepository.findOne({
      where: { id },
      relations: ['recipe_ingredients', 'recipe_methods'],
    })
  }
}
