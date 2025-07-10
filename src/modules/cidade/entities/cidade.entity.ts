/* eslint-disable prettier/prettier */
import { Estado } from "src/modules/estado/entities/estado.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cidade')
export class Cidade extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_cid'})
    id!: number;

    @Column({ name: 'nome_cid'})
    nome: string;

    @ManyToOne(() => Estado)
    @JoinColumn({ name: 'id_est_fk', referencedColumnName: 'id' })
    estado: Estado;
}
