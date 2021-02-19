import { Recipe } from './recipe.entity';
export declare class RecipeIngredient {
    id: number;
    recipe?: Recipe;
    material_name: string;
    amount: number;
    unit_type: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(init?: Partial<RecipeIngredient>);
}
