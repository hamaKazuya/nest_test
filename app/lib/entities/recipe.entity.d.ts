import { RecipeIngredient } from './recipe_ingredient.entity';
import { RecipeMethod } from './recipe_method.entity';
export declare class Recipe {
    id: number;
    name: string;
    description: string;
    recipe_ingredients: RecipeIngredient[];
    recipe_methods: RecipeMethod[];
    createdAt: Date;
    updatedAt: Date;
}
