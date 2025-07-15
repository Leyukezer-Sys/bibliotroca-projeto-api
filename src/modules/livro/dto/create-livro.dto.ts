import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, MinLength, ValidateNested } from "class-validator";
import { IdDto } from "src/common/dtos/id.dto";

export class CreateLivroDto {
    @IsNotEmpty({message: 'O Nome é Obrigatório!'})
    @MinLength(5, { message: 'o Nome deve conter no mínimo 5 caracteres'})
    nome: string;

    @IsNotEmpty({message: 'A data é Obrigatório!'})
    dataAquisicao: Date;

    @IsNotEmpty({ message: 'A Editora é Obrigatória!'})
    @IsObject({
        each: true,
        message: 'O atributo editora deve ser um objeto',
      })
    @ValidateNested({ each: true })
    @Type(() => IdDto)
    editora: IdDto;

    @IsNotEmpty({ message: 'O Autor é Obrigatório!'})
    @IsObject({
        each: true,
        message: 'O atributo autor deve ser um objeto',
      })
    @ValidateNested({ each: true })
    @Type(() => IdDto)
    autor: IdDto;

    @IsNotEmpty({ message: 'O Usuario é Obrigatório!'})
    @IsObject({
        each: true,
        message: 'O atributo usuario deve ser um objeto',
      })
    @ValidateNested({ each: true })
    @Type(() => IdDto)
    usuario: IdDto;
}