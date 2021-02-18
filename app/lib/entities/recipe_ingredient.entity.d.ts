import { Recipe } from './recipe.entity';
export declare class RecipeIngredient {
    id: number;
    recipe: Recipe;
    material_name: string;
    amount: number;
    unit_type: number;
    createdAt: Date;
    updatedAt: Date;
}
