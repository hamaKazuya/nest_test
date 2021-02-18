import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Recipe } from './recipe.entity'

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int', { name: 'recipe_id', nullable: true })
  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  recipeId: Recipe

  @Column('varchar')
  material_name: string

  @Column('varchar')
  amount: number

  @Column('varchar')
  unit_type: number // 少々とかもいれとくか・・

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
