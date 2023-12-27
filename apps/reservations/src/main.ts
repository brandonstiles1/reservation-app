import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
<<<<<<< HEAD
import * as cookieParser from 'cookie-parser';
=======
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
<<<<<<< HEAD
  app.use(cookieParser());
=======
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
