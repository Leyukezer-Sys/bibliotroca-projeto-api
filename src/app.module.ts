import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { CampusModule } from './modules/campus/campus.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { CidadeModule } from './modules/cidade/cidade.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,, UsuarioModule, CidadeModule
    ,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
