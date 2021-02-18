import { HealthcheckService } from './healthcheck.service';
import { CreateHealthcheckDto } from './dto/create-healthcheck.dto';
import { UpdateHealthcheckDto } from './dto/update-healthcheck.dto';
export declare class HealthcheckController {
    private readonly healthcheckService;
    constructor(healthcheckService: HealthcheckService);
    create(createHealthcheckDto: CreateHealthcheckDto): string;
    findAll(): boolean;
    findOne(id: string): string;
    update(id: string, updateHealthcheckDto: UpdateHealthcheckDto): string;
    remove(id: string): string;
}
