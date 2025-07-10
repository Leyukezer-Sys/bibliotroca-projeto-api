import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly service: CidadeService) {}
  
    @Get()
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.service.findOneById(id);
    }
  
    @Post()
    async create(@Body() data: CreateCidadeDto) {
      return this.service.create(data);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateCidadeDto) {
      return this.service.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.service.remove(id);
    }
}
