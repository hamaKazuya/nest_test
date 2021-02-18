import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Recipe } from './recipe.entity'

@Entity()
export class RecipeMethod {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int', { name: 'recipe_id', nullable: true })
  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  recipeId: Recipe

  @Column('int')
  methodNumber: number

  @Column('text')
  text: string

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
