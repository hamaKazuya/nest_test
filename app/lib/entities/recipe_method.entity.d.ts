import { Recipe } from './recipe.entity';
export declare class RecipeMethod {
    id: number;
    recipeId: Recipe;
    methodNumber: number;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}
