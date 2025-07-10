import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estado')
export class Estado extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_est'})
    id!: number;

    @Column({name: 'nome_est'})
    nome: string;

    @Column({name: 'uf_est'})
    uf: string;
}
