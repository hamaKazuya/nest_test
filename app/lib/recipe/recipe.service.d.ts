import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipeService {
    save(dto: CreateRecipeDto): Promise<void>;
}
