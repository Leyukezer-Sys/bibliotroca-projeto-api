import { Injectable, NotFoundException } from '@nestjs/common';
import { Campus } from './campus.entity';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';

@Injectable()
export class CampusService {
  async findAll() {
    return await Campus.find({
      order: { nome: 'ASC' },
    });
  }

  async findOneById(id: number) {
    return await Campus.findOne({ where: { id: id } });
  }

  async create(data: CreateCampusDto) {
    const campus = Campus.create({ ...data });

    return await campus.save();
  }

  async update(id: number, data: UpdateCampusDto) {
    const campus = await this.findOneById(id);

    if (!campus) {
      throw new NotFoundException('Campus não encontrado');
    }

    return await Campus.update(id, { ...data });
  }

  async remove(id: number) {
    const campus = await this.findOneById(id);

    if (!campus) {
      throw new NotFoundException('Campus não encontrado');
    }

    return await Campus.delete(id);
  }
}
