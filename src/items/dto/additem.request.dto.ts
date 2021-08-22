import { ApiProperty, PickType } from '@nestjs/swagger';
import { Items } from 'src/entities/Items';

// export class AdditemRequestDto extends PickType(Items, ['name', 'detail', 'price']) {
export class AdditemRequestDto {

	@ApiProperty({
		example: "나이스 반팔",
		description: "상품명",
		required: true,
	})
	public name: string;

	@ApiProperty({
		example: "여름에 입기 너무 좋아용",
		description: "상품상세",
		required: true,
	})
	public detail: string;
	
	@ApiProperty({
		example: "500000",
		description: "가격",
		required: true,
	})
	public price: number;

	@ApiProperty({
		description: "사용자 토큰",
		required: true,
	})
	public access_token: string;

	@ApiProperty({
		description: "아이템 이미지",
		required: true,
	})
	public file: File;
}