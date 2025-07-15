import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';
import { Editora } from '../editora/entities/editora.entity';
import { Autor } from '../autor/entities/autor.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class LivroService {
    async findAll() {
        return await Livro.find({
            relations: ['editora', 'autor', 'usuario'],
            order: { nome: 'ASC' },
        });
    }

    async findOneById(id: number) {
        const livro = await Livro.findOne({
            relations: ['editora', 'autor', 'usuario'],
            where: { id: id }
        });

        if (!livro) {
            throw new NotFoundException('Livro não encontrado!');
        }

        return livro;
    }

    async create(data: CreateLivroDto) {
        const { editora, autor, usuario } = data;

        const _editora = await Editora.findOne({ where: { id: editora.id } });

        if (!_editora) {
            throw new NotFoundException('A Editora informada não foi encontrada');
        }

        const _autor = await Autor.findOne({ where: { id: autor.id } });

        if (!_autor) {
            throw new NotFoundException('O autor informada não foi encontrada');
        }

        const _usuario = await Usuario.findOne({ where: { id: usuario.id } });

        if (!_usuario) {
            throw new NotFoundException('O Usuario informada não foi encontrada');
        }

        const livro = Livro.create({ ...data });

        return await livro.save();
    }

    async update(id: number, data: UpdateLivroDto) {
        const { editora, autor } = data;

        const _editora = await Editora.findOne({ where: { id: editora?.id } });

        if (!_editora) {
            throw new NotFoundException('A Editora informada não foi encontrada');
        }

        const _autor = await Autor.findOne({ where: { id: autor?.id } });

        if (!_autor) {
            throw new NotFoundException('O autor informada não foi encontrada');
        }

        const livro = await this.findOneById(id);

        if (!livro) {
            throw new NotFoundException('Livro não encontrado!');
        }

        return await Livro.update(id, { ...data });
    }

    async remove(id: number) {
        const livro = await this.findOneById(id);

        if (!livro) {
            throw new NotFoundException('Livro não encontrado')
        }

        return await Livro.delete(id);
    }
}
