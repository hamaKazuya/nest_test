import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common'
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
  async findAll() {
    return await this.recipeService.findAll()
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.recipeService.findById(id)
  }
}
