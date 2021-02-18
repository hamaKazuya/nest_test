import { CreateHealthcheckDto } from './dto/create-healthcheck.dto';
import { UpdateHealthcheckDto } from './dto/update-healthcheck.dto';
export declare class HealthcheckService {
    create(createHealthcheckDto: CreateHealthcheckDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHealthcheckDto: UpdateHealthcheckDto): string;
    remove(id: number): string;
}
