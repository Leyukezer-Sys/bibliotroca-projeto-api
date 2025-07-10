import { IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateEstadoDto {
    @IsNotEmpty({message: 'O nome é obrigatório'})
    @MinLength(5, { message: 'O nome deve conter no mínimo 5 caracteres'})
    nome: string;

    @IsNotEmpty({message: 'A sigla é obrigatória!'})
    @Length(2,2,{message: 'A sigla pode ser composta apenas de 2 caracteres'})
    uf: string;
}