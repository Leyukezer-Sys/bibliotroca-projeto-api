import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campus')
export class Campus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;
}
