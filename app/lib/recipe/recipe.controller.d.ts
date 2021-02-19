import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipeService } from './recipe.service';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(dto: CreateRecipeDto): Promise<import("../entities/recipe.entity").Recipe | undefined>;
    findAll(dto: CreateRecipeDto): Promise<boolean>;
}
