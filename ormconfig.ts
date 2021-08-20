import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Items } from 'src/entities/Items';
import { Users } from './src/entities/Users';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Users, Items
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: true,
  logging: true, // 쿼리가 복잡해질수로 orm은 비효율적인 코드를 짤 가능성 높음. 로킹 항상 true
  keepConnectionAlive: true, // hot reloading을 위해.. false로 하면 db 연결 끊김
};

export = config;