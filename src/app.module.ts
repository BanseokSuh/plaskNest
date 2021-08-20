import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/Users';
import { Items } from './entities/Items';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 process.env 사용 가능하게 함
    }),
    TypeOrmModule.forFeature([Users, Items]),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule { // implements를 하는 이유. 없어도 에러는 안 나는데 사전에 에러를 잡기 위함이다.
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // 전체 라우트에 미들웨어를 적용하겠다. 미들웨어는 컨슈머에 연결한다.
  }
}
