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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
const recipe_ingredient_entity_1 = require("./recipe_ingredient.entity");
const recipe_method_entity_1 = require("./recipe_method.entity");
let Recipe = class Recipe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => recipe_ingredient_entity_1.RecipeIngredient, (RecipeIngredient) => RecipeIngredient.id),
    __metadata("design:type", Array)
], Recipe.prototype, "recipe_ingredients", void 0);
__decorate([
    typeorm_1.OneToMany(() => recipe_method_entity_1.RecipeMethod, (recipeMethod) => recipeMethod.id),
    __metadata("design:type", Array)
], Recipe.prototype, "recipe_methods", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Recipe.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Recipe.prototype, "updatedAt", void 0);
Recipe = __decorate([
    typeorm_1.Entity()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.entity.js.map