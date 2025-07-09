import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { ServidorService } from './servidor.service';

@Controller('servidores')
export class ServidorController {
  constructor(private readonly service: ServidorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOneById(id);
  }

  @Post()
  async create(@Body() data: CreateServidorDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateServidorDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
