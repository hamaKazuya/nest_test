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
    // const connection = await createConnection()
    const recipeRepository = getRepository(Recipe)
    // const recipeMethodRepository = getRepository(RecipeMethod)
    // const recipeIngredientRepository = getRepository(RecipeIngredient)

    // recipe.recipe_ingredients = dto.recipe_ingredients
    // const recipeIngredient = new RecipeIngredient(dto.recipe_ingredients)
    // const recipeMethod = new RecipeMethod()

    // console.log('recipe.beforesave', dto)
    // const entity = new Recipe()
    // const result = entity.set(dto)
    const entity = new Recipe()
    entity.name = dto.name
    entity.description = dto.description
    entity.recipe_ingredients = dto.recipe_ingredients
    entity.recipe_methods = dto.recipe_methods
    console.log('entity: ', entity)
    recipeRepository.save(entity)
    // await recipeRepository.save(dto)
    // const recipe = await recipeRepository.findOne()
    // console.log('recipe_methods: ', dto.recipe_methods[0])
    // if (!recipe) {
    //   throw new Error('no recipe')
    // }
    // console.log({
    //   ...dto.recipe_methods[0],
    //   recipe: recipe.id,
    // })
    // recipeMethodRepository.save({
    //   methodNumber: dto.recipe_methods[0].methodNumber,
    //   text: dto.recipe_methods[0].text,
    //   recipeId: recipe.id,
    // })
    // console.log('recipe_ingredients: ', dto.recipe_ingredients[0])
    // recipeIngredientRepository.save({
    //   ...dto.recipe_ingredients[0],
    //   recipeId: recipe.id,
    // })

    return recipeRepository.findOne()
  }
}
