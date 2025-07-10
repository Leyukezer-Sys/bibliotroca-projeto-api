import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('genero')
export class Genero extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_gen'})
    id: number;

    @Column({name:'nome_gen'})
    nome: string;
}
