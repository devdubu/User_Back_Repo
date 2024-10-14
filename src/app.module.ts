import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/authConfig';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
