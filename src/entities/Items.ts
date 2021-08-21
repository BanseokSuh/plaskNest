import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { Users } from './Users';

@Entity({ schema: 'plaskNest', name: 'items' })
export class Items {
  
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'detail', length: 30 })
  detail: string;

  @IsString()
  @IsNotEmpty()
  @Column('int', { name: 'price' })
  price: number;

  @IsString()
  @Column('varchar', { name: 'starCount', default: null })
  starCount: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'imgPath' })
  imgPath: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;


  @ManyToOne(() => Users, (users) => users.items)
  user: Users;
}