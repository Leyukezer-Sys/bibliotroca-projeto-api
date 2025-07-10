import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('editora')
export class Editora extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_edi'})
    id!:number;

    @Column({name:'nome_edi'})
    nome: string;

    @Column({name:'url_edi'})
    url: string;

    @Column({name:'contato_edi'})
    contato: string;
}
