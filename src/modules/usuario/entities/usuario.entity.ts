//usuario/entities/usuario.entity.ts
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "../../cidade/entities/cidade.entity";

@Entity('usuario')
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_usu'})
    id!:number;

    @Column({name:'nome_usu'})
    nome: string;

    @Column({name:'email_usu'})
    email: string;

    @Column({name:'contato_usu'})
    contato: string;

    @Column({name:'admin'})
    admin: boolean;

    @Column({name:'senha_usu'})
    senha: string;

    @Column({name:'avaliacao_usu'})
    avaliacao: number;

    @ManyToOne(() => Cidade)
    @JoinColumn({name: 'id_cid_fk', referencedColumnName: 'id'})
    cidade: Cidade;
}