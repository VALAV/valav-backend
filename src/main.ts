import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.SERVER_PORT).then(() => {
    console.log(`-----   Servidor iniciado en puerto ${process.env.SERVER_PORT}`);
  });
}
dotenv.config();
bootstrap();
