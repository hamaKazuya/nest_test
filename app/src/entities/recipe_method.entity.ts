import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Recipe } from './recipe.entity'

@Entity()
export class RecipeMethod {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  @JoinColumn()
  recipe: Recipe

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
