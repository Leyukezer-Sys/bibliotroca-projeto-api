import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';

@Controller('campus')
export class CampusController {
  constructor(private readonly service: CampusService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOneById(id);
  }

  @Post()
  async create(@Body() data: CreateCampusDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateCampusDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
