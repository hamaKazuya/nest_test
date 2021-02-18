import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { RecipeIngredient } from './recipe_ingredient.entity'
import { RecipeMethod } from './recipe_method.entity'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  name: string

  @Column('text')
  description: string

  @OneToMany(() => RecipeIngredient, (RecipeIngredient) => RecipeIngredient.id)
  recipe_ingredients: RecipeIngredient[]

  @OneToMany(() => RecipeMethod, (recipeMethod) => recipeMethod.id)
  recipe_methods: RecipeMethod[]

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
}
