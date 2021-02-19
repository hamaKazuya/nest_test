"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const recipe_entity_1 = require("../entities/recipe.entity");
const typeorm_1 = require("typeorm");
let RecipeService = class RecipeService {
    constructor() { }
    async save(dto) {
        console.log('recipeSerivse: ', dto);
        const recipeRepository = typeorm_1.getRepository(recipe_entity_1.Recipe);
        const entity = new recipe_entity_1.Recipe();
        entity.name = dto.name;
        entity.description = dto.description;
        entity.recipe_ingredients = dto.recipe_ingredients;
        entity.recipe_methods = dto.recipe_methods;
        console.log('entity: ', entity);
        recipeRepository.save(entity);
        return recipeRepository.findOne();
    }
};
RecipeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map