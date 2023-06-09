import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import session, * as sessions from 'express-session';
// import  passport from 'passport';
import cookieParser from 'cookie-parser';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import passport from 'passport';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { ConfigService } from '@nestjs/config';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  const configService = app.get(ConfigService);
  app.use(passport.initialize());
  app.use(cookieParser());
  await app.listen(4000);
}
bootstrap();
