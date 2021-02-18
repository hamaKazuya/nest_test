import { Body, Controller, Post } from '@nestjs/common'
import { CreateRecipeDto } from './dto/create-recipe.dto'
import { RecipeService } from './recipe.service'

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('/')
  async create(@Body() dto: CreateRecipeDto) {
    return await this.recipeService.save(dto)
  }
}
