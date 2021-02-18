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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckController = void 0;
const common_1 = require("@nestjs/common");
const healthcheck_service_1 = require("./healthcheck.service");
const create_healthcheck_dto_1 = require("./dto/create-healthcheck.dto");
const update_healthcheck_dto_1 = require("./dto/update-healthcheck.dto");
let HealthcheckController = class HealthcheckController {
    constructor(healthcheckService) {
        this.healthcheckService = healthcheckService;
    }
    create(createHealthcheckDto) {
        return this.healthcheckService.create(createHealthcheckDto);
    }
    findAll() {
        console.log('/healthcheck');
        return true;
    }
    findOne(id) {
        return this.healthcheckService.findOne(+id);
    }
    update(id, updateHealthcheckDto) {
        return this.healthcheckService.update(+id, updateHealthcheckDto);
    }
    remove(id) {
        return this.healthcheckService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_healthcheck_dto_1.CreateHealthcheckDto]),
    __metadata("design:returntype", void 0)
], HealthcheckController.prototype, "create", null);
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthcheckController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthcheckController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_healthcheck_dto_1.UpdateHealthcheckDto]),
    __metadata("design:returntype", void 0)
], HealthcheckController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthcheckController.prototype, "remove", null);
HealthcheckController = __decorate([
    common_1.Controller('healthcheck'),
    __metadata("design:paramtypes", [healthcheck_service_1.HealthcheckService])
], HealthcheckController);
exports.HealthcheckController = HealthcheckController;
//# sourceMappingURL=healthcheck.controller.js.map