import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsObject, MinLength, ValidateNested } from "class-validator";
import { IdDto } from "src/common/dtos/id.dto";

export class CreateUsuarioDto {
    @IsNotEmpty({message: 'O Nome é Obrigatório!'})
    @MinLength(5, { message: 'o Nome deve conter no mínimo 5 caracteres'})
    nome: string;

    @IsNotEmpty({message: 'O Nome é Obrigatório!'})
    @IsEmail({},{message:'O Email é invalido!'})
    email: string;

    @IsNotEmpty({message: 'O contato é obrigatório!'})
    contato: string;

    @IsNotEmpty({message: 'A senha é obrigatória!'})
    @MinLength(6, {message: 'A senha deve conter no mínimo 6 caracteres'})
    senha: string;

    @IsNotEmpty({ message: 'A cidade é Obrigatória!'})
    @IsObject({
        each: true,
        message: 'O atributo cidade deve ser um objeto',
      })
    @ValidateNested({ each: true })
    @Type(() => IdDto)
    cidade: IdDto;
}