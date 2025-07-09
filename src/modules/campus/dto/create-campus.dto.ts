import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCampusDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(5, { message: 'O nome deve ter minímo 5 caracteres' })
  nome: string;
}
