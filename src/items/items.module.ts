import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Items } from 'src/entities/Items';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items, Users]),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_CONSTANTS,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [ItemsService, UsersService],
  controllers: [ItemsController],
})
export class ItemsModule {}
