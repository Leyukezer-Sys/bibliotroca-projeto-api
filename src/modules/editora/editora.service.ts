/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { Editora } from './entities/editora.entity';

@Injectable()
export class EditoraService {
   async findAll() {
        return await Editora.find({
          order: { nome: 'ASC' }
        });
      }
    
      async findOneById(id: number) {
        const editora = await Editora.findOne({
          where: { id: id }
        });
    
        if (!editora) {
          throw new NotFoundException('O editora não encontrado');
        }
        return editora;
      }
    
      async create(data: CreateEditoraDto) {
        const editora = Editora.create({ ...data });
    
        return await editora.save();
      }
    
      async update(id: number, data: UpdateEditoraDto) {
        const editora = await this.findOneById(id);
    
        if (!editora) {
          throw new NotFoundException('Editora não encontrado!');
        }
    
        return await Editora.update(id, { ...data });
      }
    
      async remove(id: number) {
        const editora = await this.findOneById(id);
        if (!editora) {
          throw new NotFoundException('Autor não encontrado')
        }
        return await Editora.delete(id);
      }
}
