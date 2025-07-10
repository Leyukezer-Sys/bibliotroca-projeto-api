import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';

@Controller('editora')
export class EditoraController {
   constructor(private readonly service: EditoraService) {}
    
      @Get()
      findAll() {
        return this.service.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: number) {
        return this.service.findOneById(id);
      }
    
      @Post()
      async create(@Body() data: CreateEditoraDto) {
        return this.service.create(data);
      }
    
      @Patch(':id')
      update(@Param('id') id: number, @Body() data: UpdateEditoraDto) {
        return this.service.update(id, data);
      }
    
      @Delete(':id')
      remove(@Param('id') id: number) {
        return this.service.remove(id);
      }
}
