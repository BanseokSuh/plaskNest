import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Items } from './Items';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'plaskNest', name: 'users' })
export class Users {

  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @IsNotEmpty()
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'username', length: 30 })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'mobile' })
  mobile: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column('varchar')
  salt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;


  @OneToMany(() => Items, (items) => items.user, {
    cascade: false,
  })
  items: Items[];
}