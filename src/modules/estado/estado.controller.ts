import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Controller('estado')
export class EstadoController {
  constructor(private readonly service: EstadoService) {}
  
    @Get()
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.service.findOneById(id);
    }
  
    @Post()
    async create(@Body() data: CreateEstadoDto) {
      return this.service.create(data);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateEstadoDto) {
      return this.service.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.service.remove(id);
    }
}
