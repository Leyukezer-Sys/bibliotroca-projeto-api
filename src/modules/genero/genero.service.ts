/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GeneroService {
  async findAll() {
    return await Genero.find({
      order: { nome: 'ASC' }
    });
  }

  async findOneById(id: number) {
    const genero = await Genero.findOne({
      where: { id: id }
    });

    if (!genero) {
      throw new NotFoundException('Genero não encontrado');
    }
    return genero;
  }

  async create(data: CreateGeneroDto) {
    const genero = Genero.create({ ...data });

    return await genero.save();
  }

  async update(id: number, data: UpdateGeneroDto) {
    const genero = await this.findOneById(id);

    if (!genero) {
      throw new NotFoundException('Genero não encontrado!');
    }

    return await Genero.update(id, { ...data });
  }

  async remove(id: number) {
    const genero = await this.findOneById(id);
    if (!genero) {
      throw new NotFoundException('Genero não encontrado')
    }
    return await Genero.delete(id);
  }
}
