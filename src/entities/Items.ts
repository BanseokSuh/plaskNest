import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity({ schema: 'plaskNest', name: 'items' })
export class Items {
	@ApiProperty({
		example: 1,
		description: '아이템 아이디'
	})
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
	@ApiProperty({
		example: '상품명1',
		description: '상품명'
	})
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @IsString()
  @IsNotEmpty()
	@ApiProperty({
		example: 10000,
		description: '가격'
	})
  @Column('int', { name: 'price' })
  price: number;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'starCount' })
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
}