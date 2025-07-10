import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly service: UsuarioService){}

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.service.findOneById(id);
    }

    @Post()
    async create(@Body() data: CreateUsuarioDto){
        return this.service.create(data);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateUsuarioDto){
        return this.service.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.service.remove(id);
    }

}
