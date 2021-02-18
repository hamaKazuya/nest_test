import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { CreateHealthcheckDto } from './dto/create-healthcheck.dto';
import { UpdateHealthcheckDto } from './dto/update-healthcheck.dto';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Post()
  create(@Body() createHealthcheckDto: CreateHealthcheckDto) {
    return this.healthcheckService.create(createHealthcheckDto);
  }

  @Get()
  findAll() {
    return this.healthcheckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthcheckService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHealthcheckDto: UpdateHealthcheckDto) {
    return this.healthcheckService.update(+id, updateHealthcheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthcheckService.remove(+id);
  }
}
