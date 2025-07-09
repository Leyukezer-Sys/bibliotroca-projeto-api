import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Campus } from '../campus/campus.entity';

@Entity('servidor')
export class Servidor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  siape: number;

  @ManyToOne(() => Campus)
  @JoinColumn({ name: 'campus_id', referencedColumnName: 'id' })
  campus: Campus;
}
