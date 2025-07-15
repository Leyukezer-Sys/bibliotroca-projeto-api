import { Autor } from "src/modules/autor/entities/autor.entity";
import { Editora } from "src/modules/editora/entities/editora.entity";
import { Usuario } from "src/modules/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('livro')
export class Livro extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_liv'})
    id!:number;

    @Column({name:'nome_liv'})
    nome: string;

    @Column({name:'imagem_liv'})
    imagem: string;

    @Column({name:'descricao_liv'})
    descricao: string;

    @Column({name:'dataAquisicao_liv'})
    dataAquisicao: Date;

    @Column({name:'conservacao_liv'})
    conservacao: string;

    @ManyToOne(() => Editora)
    @JoinColumn({name: 'id_edi_fk', referencedColumnName: 'id'})
    editora: Editora;

    @ManyToOne(() => Autor)
    @JoinColumn({name: 'id_aut_fk', referencedColumnName: 'id'})
    autor: Autor;

    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'id_usu_fk', referencedColumnName: 'id'})
    usuario: Usuario;
}