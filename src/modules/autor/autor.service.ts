/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorService {
  async findAll() {
      return await Autor.find({
        order: { nome: 'ASC' }
      });
    }
  
    async findOneById(id: number) {
      const autor = await Autor.findOne({
        where: { id: id }
      });
  
      if (!autor) {
        throw new NotFoundException('O autor não encontrado');
      }
      return autor;
    }
  
    async create(data: CreateAutorDto) {
      const autor = Autor.create({ ...data });
  
      return await autor.save();
    }
  
    async update(id: number, data: UpdateAutorDto) {
      const autor = await this.findOneById(id);
  
      if (!autor) {
        throw new NotFoundException('Autor não encontrado!');
      }
  
      return await Autor.update(id, { ...data });
    }
  
    async remove(id: number) {
      const autor = await this.findOneById(id);
      if (!autor) {
        throw new NotFoundException('Autor não encontrado')
      }
      return await Autor.delete(id);
    }
}
