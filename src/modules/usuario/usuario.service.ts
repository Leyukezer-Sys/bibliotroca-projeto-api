import { Injectable, NotFoundException } from '@nestjs/common';
import { Cidade } from '../cidade/entities/cidade.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
    async findAll(){
        return await Usuario.find({
            relations: ['cidade'],
            order: {nome: 'ASC'},
        });
    }

    async findOneById(id: number){
        const usuario = await Usuario.findOne({
            relations: ['cidade'],
            where: {id: id}
        });

        if (!usuario) {
            throw new NotFoundException('Usuario não encontrado!');
        }

        return usuario;
    }

    async create (data: CreateUsuarioDto){
        const { cidade } = data;

        const _cidade = await Cidade.findOne({where: {id: cidade.id}});

        if (!_cidade) {
            throw new NotFoundException('A cidade informada não foi encontrada');
        }

        const usuario = Usuario.create({ ...data });

        return await usuario.save();
    }

    async update(id: number, data: UpdateUsuarioDto ){
        const { cidade } = data;

        const _cidade = await Cidade.findOne({where: {id: cidade?.id}});

        if (!_cidade) {
            throw new NotFoundException('A cidade informada não foi encontrada');
        }

        const usuario = await this.findOneById(id);

        if (!usuario){
            throw new NotFoundException('Usuario não encontrado!');     
        }

        return await Usuario.update(id, { ...data });
    }

    async remove(id: number){
        const usuario = await this.findOneById(id);

        if (!usuario){
            throw new NotFoundException('Usuario não encontrado')
        }

        return await Usuario.delete(id);
    }

}
