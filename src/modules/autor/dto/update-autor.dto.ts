import { PartialType } from '@nestjs/swagger';
import { CreateAutorDto } from './create-autor.dto';
import { IsOptional } from 'class-validator';


export class UpdateAutorDto extends PartialType(CreateAutorDto) {
    @IsOptional()
    email?: string;

    @IsOptional()
    imagem?: string;

    @IsOptional()
    dataNascimento?: Date;
}
