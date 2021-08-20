import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'plaskNest', name: 'users' })
export class Users {
	@ApiProperty({
		example: 1,
		description: '사용자 아이디'
	})
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @IsNotEmpty()
	@ApiProperty({
		example: 'still3028@gmail.com',
		description: '이메일'
	})
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
	@ApiProperty({
		example: '서반석',
		description: '이름'
	})
  @Column('varchar', { name: 'username', length: 30 })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '010-0000-0000',
    description: '전화번호'
  })
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

}