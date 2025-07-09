import { Injectable, NotFoundException } from '@nestjs/common';
import { Campus } from '../campus/campus.entity';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { Servidor } from './servidor.entity';

@Injectable()
export class ServidorService {
  async findAll() {
    return await Servidor.find({
      relations: ['campus'],
      order: { nome: 'ASC' },
    });
  }

  async findOneById(id: number) {
    const servidor = await Servidor.findOne({
      relations: ['campus'],
      where: { id: id },
    });

    if (!servidor) {
      throw new NotFoundException('Servidor não encontrado');
    }

    return servidor;
  }

  async create(data: CreateServidorDto) {
    const { campus } = data;

    const _campus = await Campus.findOne({ where: { id: campus.id } });

    if (!_campus) {
      throw new NotFoundException('O campus informado não foi encontrado');
    }

    const servidor = Servidor.create({ ...data });

    return await servidor.save();
  }

  async update(id: number, data: UpdateServidorDto) {
    const { campus } = data;

    if (campus) {
      const _campus = await Campus.findOne({ where: { id: campus.id } });

      if (!_campus) {
        throw new NotFoundException('O campus informado não foi encontrado');
      }
    }

    const servidor = await this.findOneById(id);

    if (!servidor) {
      throw new NotFoundException('Servidor não encontrado');
    }

    return await Servidor.update(id, { ...data });
  }

  async remove(id: number) {
    const servidor = await this.findOneById(id);

    if (!servidor) {
      throw new NotFoundException('Servidor não encontrado');
    }

    return await Servidor.delete(id);
  }
}
