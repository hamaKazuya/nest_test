"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckService = void 0;
const common_1 = require("@nestjs/common");
let HealthcheckService = class HealthcheckService {
    create(createHealthcheckDto) {
        return 'This action adds a new healthcheck';
    }
    findAll() {
        return `This action returns all healthcheck`;
    }
    findOne(id) {
        return `This action returns a #${id} healthcheck`;
    }
    update(id, updateHealthcheckDto) {
        return `This action updates a #${id} healthcheck`;
    }
    remove(id) {
        return `This action removes a #${id} healthcheck`;
    }
};
HealthcheckService = __decorate([
    common_1.Injectable()
], HealthcheckService);
exports.HealthcheckService = HealthcheckService;
//# sourceMappingURL=healthcheck.service.js.map