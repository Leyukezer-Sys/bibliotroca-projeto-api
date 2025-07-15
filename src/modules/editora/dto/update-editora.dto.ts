import { PartialType } from '@nestjs/swagger';
import { CreateEditoraDto } from './create-editora.dto';
import { IsOptional } from 'class-validator';

export class UpdateEditoraDto extends PartialType(CreateEditoraDto) {
    @IsOptional()
    url?: string;

    @IsOptional()
    contato?: string;
}
