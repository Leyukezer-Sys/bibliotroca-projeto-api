import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AutorModule } from './modules/autor/autor.module';
import { CidadeModule } from './modules/cidade/cidade.module';
import { EstadoModule } from './modules/estado/estado.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsuarioModule,
    CidadeModule,
    EstadoModule,
    AutorModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
