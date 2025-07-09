import { IsInt, IsNotEmpty } from 'class-validator';

export class IdDto {
  @IsNotEmpty({ message: 'O atribuito `id` é obrigatório' })
  @IsInt({ message: 'O atribuito `id` deve ser do tipo inteiro' })
  id: number;
}
