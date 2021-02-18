"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHealthcheckDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_healthcheck_dto_1 = require("./create-healthcheck.dto");
class UpdateHealthcheckDto extends mapped_types_1.PartialType(create_healthcheck_dto_1.CreateHealthcheckDto) {
}
exports.UpdateHealthcheckDto = UpdateHealthcheckDto;
//# sourceMappingURL=update-healthcheck.dto.js.map