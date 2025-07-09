/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cidade')
export class Cidade extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_cid'})
    id!: number;
}