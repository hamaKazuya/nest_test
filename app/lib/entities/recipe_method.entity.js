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
exports.RecipeMethod = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
let RecipeMethod = class RecipeMethod {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeMethod.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'recipe_id', nullable: true }),
    typeorm_1.ManyToOne(() => recipe_entity_1.Recipe, (recipe) => recipe.id),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeMethod.prototype, "recipeId", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], RecipeMethod.prototype, "methodNumber", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], RecipeMethod.prototype, "text", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RecipeMethod.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RecipeMethod.prototype, "updatedAt", void 0);
RecipeMethod = __decorate([
    typeorm_1.Entity()
], RecipeMethod);
exports.RecipeMethod = RecipeMethod;
//# sourceMappingURL=recipe_method.entity.js.map