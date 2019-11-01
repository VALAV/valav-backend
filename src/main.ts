import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT).then(() => {
    console.log(`-----   Servidor iniciado en puerto ${process.env.SERVER_PORT}`);
  });
}
dotenv.config();
bootstrap();
