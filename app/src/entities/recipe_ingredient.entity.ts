import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Recipe } from './recipe.entity'

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id: number

  // @Column('int', { name: 'recipe_id', nullable: true })
  @ManyToOne(() => Recipe, (recipe) => recipe.recipe_ingredients)
  @JoinColumn([{ name: 'recipe_id' }])
  recipe?: Recipe

  @Column('varchar')
  material_name: string

  @Column('int')
  amount: number

  @Column('varchar')
  unit_type: string // 少々とかもいれとくか・・

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date

  @Column('datetime', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date

  constructor(init?: Partial<RecipeIngredient>) {
    Object.assign(this, init)
  }
}
