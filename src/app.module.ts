import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import {NewsfeedModule} from "./modules/newsfeed/newsfeed.module";
import {FichierModule} from "./modules/fichier/fichier.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
    }),
    UserModule,
    AuthModule,
      NewsfeedModule,
      FichierModule
  ],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
