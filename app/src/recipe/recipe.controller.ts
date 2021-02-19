import { Body, Controller, Post, Get } from '@nestjs/common'
import { CreateRecipeDto } from './dto/create-recipe.dto'
import { RecipeService } from './recipe.service'

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() dto: CreateRecipeDto) {
    console.log('controller dto:', dto)
    return await this.recipeService.save(dto)
  }

  @Get()
  async findAll(@Body() dto: CreateRecipeDto) {
    return true
  }
}
