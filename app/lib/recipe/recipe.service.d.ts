import { Recipe } from 'src/entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipeService {
    constructor();
    save(dto: CreateRecipeDto): Promise<Recipe | undefined>;
}
