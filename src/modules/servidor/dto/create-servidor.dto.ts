import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { IdDto } from 'src/common/dtos/id.dto';

//Data Transfer Object -> Objeto de Transferencia de dados
export class CreateServidorDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(5, { message: 'O nome deve ter minímo 5 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'O CPF é obrigatório' })
  cpf: string;

  @IsNotEmpty({ message: 'O siape é obrigatório' })
  siape: number;

  @IsNotEmpty({ message: 'O atributo `campus` é obrigatório' })
  @IsObject({
    each: true,
    message: 'O atributo campus` deve ser um objeto',
  })
  @ValidateNested({ each: true })
  @Type(() => IdDto)
  campus: IdDto;
}
