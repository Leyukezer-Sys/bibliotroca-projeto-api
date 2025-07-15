import { PartialType } from '@nestjs/swagger';
import { CreateLivroDto } from './create-livro.dto';
import { IsOptional } from 'class-validator';

export class UpdateLivroDto extends PartialType(CreateLivroDto) {
  @IsOptional()
  imagem?: string;

  @IsOptional()
  descricao?: string;

  @IsOptional()
  conservacao?: string;
}


