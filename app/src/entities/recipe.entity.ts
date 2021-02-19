// import { CreateRecipeDto } from 'src/recipe/dto/create-recipe.dto'
// import { CreateRecipeDto } from 'src/recipe/dto/create-recipe.dto'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { RecipeIngredient } from './recipe_ingredient.entity'
import { RecipeMethod } from './recipe_method.entity'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column('text')
  description: string

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
    { cascade: true },
  )
  recipe_ingredients?: RecipeIngredient[]

  @OneToMany(() => RecipeMethod, (recipeMethod) => recipeMethod.recipe, {
    cascade: true,
  })
  recipe_methods?: RecipeMethod[]

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @Column('datetime', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date

  constructor(init?: Partial<Recipe>) {
    Object.assign(this, init)
  }
}
