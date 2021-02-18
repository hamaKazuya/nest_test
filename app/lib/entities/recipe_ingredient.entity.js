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
exports.RecipeIngredient = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
let RecipeIngredient = class RecipeIngredient {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'recipe_id', nullable: true }),
    typeorm_1.ManyToOne(() => recipe_entity_1.Recipe, (recipe) => recipe.id),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeIngredient.prototype, "recipeId", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], RecipeIngredient.prototype, "material_name", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "unit_type", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RecipeIngredient.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RecipeIngredient.prototype, "updatedAt", void 0);
RecipeIngredient = __decorate([
    typeorm_1.Entity()
], RecipeIngredient);
exports.RecipeIngredient = RecipeIngredient;
//# sourceMappingURL=recipe_ingredient.entity.js.map