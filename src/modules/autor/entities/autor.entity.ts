/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('autor')
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_aut'})
    id!:number;

    @Column({name:'nome_aut'})
    nome: string;

    @Column({name:'email_aut'})
    email: string;

    @Column({name:'imagem_aut'})
    contato: string;

    @Column({name:'dataNascimento_aut'})
    admin: Date;

    @Column({name:'biografia'})
    senha: string;
}