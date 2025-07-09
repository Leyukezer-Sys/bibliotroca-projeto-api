/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto){}