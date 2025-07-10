import { Injectable, NotFoundException } from '@nestjs/common';
import { Estado } from '../estado/entities/estado.entity';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity';

@Injectable()
export class CidadeService {
  async findAll() {
    return await Cidade.find({
      relations: ['estado'],
      order: {nome: 'ASC'}
    });
  }

  async findOneById(id: number) {
    const cidade = await Cidade.findOne({
      relations: ['estado'],
      where: {id: id}
    });

    if (!cidade) {
        throw new NotFoundException('Cidade não encontrada!')
    }

    return cidade;
  }

  async create(data: CreateCidadeDto){
    const { estado } = data;

    const _estado = await Estado.findOne({where: id: estado.id});
  }

  update(id: number, updateCidadeDto: UpdateCidadeDto) {
    return `This action updates a #${id} cidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} cidade`;
  }
}
