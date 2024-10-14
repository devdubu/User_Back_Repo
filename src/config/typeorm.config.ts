import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //   migrations: [__dirname + "/**/migrations/*.js"],
  logging: true,
  verboseRetryLog: true,
  autoLoadEntities: true,
  retryAttempts: 3000,
};
