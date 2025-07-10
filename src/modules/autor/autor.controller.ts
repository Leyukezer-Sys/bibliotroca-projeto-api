import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly service: AutorService) {}
  
    @Get()
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.service.findOneById(id);
    }
  
    @Post()
    async create(@Body() data: CreateAutorDto) {
      return this.service.create(data);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateAutorDto) {
      return this.service.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.service.remove(id);
    }
}
