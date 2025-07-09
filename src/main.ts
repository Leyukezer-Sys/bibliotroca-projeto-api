import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: {
        target: false,
        value: false,
      },
    }),
  );

  const documentBuilder = new DocumentBuilder()
    .setTitle('BiblioTroca API')
    .setDescription('API para o projeto WEB Bibliotroca da matéria de Programação Web II')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
