/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateEditoraDto {
    @IsNotEmpty({message: 'O nome é obrigatório'})
    @MinLength(5, { message: 'O nome deve conter no mínimo 5 caracteres'})
    nome: string;
}
