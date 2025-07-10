import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, MinLength, ValidateNested } from "class-validator";
import { IdDto } from "src/common/dtos/id.dto";

export class CreateCidadeDto {
    @IsNotEmpty({message: 'O nome é obrigatório'})
    @MinLength(5, {message: 'O nome deve conter no mínimo 5 caracteres'})
    nome: string;

    @IsNotEmpty({message: 'O estado é obrigatório!'})
    @IsObject({
        each: true,
        message: 'O atributo estado deve ser um objeto'
    })
    @ValidateNested({each: true})
    @Type(() => IdDto)
    estado: IdDto;
}
