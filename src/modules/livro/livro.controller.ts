
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Controller('livro')
export class LivroController {
  constructor(private readonly service: LivroService){}

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
      return this.service.findOneById(id);
    }

    @Post()
    async create(@Body() data: CreateLivroDto){
        return this.service.create(data);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateLivroDto){
        return this.service.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.service.remove(id);
    }
}
