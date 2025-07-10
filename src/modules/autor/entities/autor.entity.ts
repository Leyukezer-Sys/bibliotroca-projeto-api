import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('autor')
export class Autor extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_aut'})
    id!:number;

    @Column({name:'nome_aut'})
    nome: string;

    @Column({name:'email_aut'})
    email: string;

    @Column({name:'imagem_aut'})
    imagem: string;

    @Column({name:'dataNascimento_aut'})
    dataNascimento: Date;

    @Column()
    biografia: string;
}