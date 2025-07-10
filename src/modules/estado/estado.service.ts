import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';

@Injectable()
export class EstadoService {

  async findAll() {
    return await Estado.find({
      order: {nome: 'ASC'}
    });
  }

  async findOneById(id: number) {
    const estado = await Estado.findOne({
      where: {id: id}
    }); 
    return estado;
  }

  async create(data: CreateEstadoDto) {
    const estado = Estado.create({ ...data });

    return await estado.save();
  }

  async update(id: number, data: UpdateEstadoDto) {
    const estado = await this.findOneById(id); 
    
    if (!estado) {
      throw new NotFoundException('Estado não encontrado!');
    }

    return await Estado.update(id, {...data});
  }

  async remove(id: number) {
    const estado = await this.findOneById(id);
    if (!estado) {
      throw new NotFoundException('Estado não encontrado') 
    }
    return await Estado.delete(id);
  }
}
