import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

// export class JoinRequestDto extends PickType(Users, ['email', 'password', 'username', 'mobile'] as const) { }
export class JoinRequestDto {
	
	@ApiProperty({
		example: "still3029@gmail.com",
		description: "이메일",
		required: true,
	})
	public email: string;
	
	@ApiProperty({
		example: "World123!@#",
		description: "비밀번호",
		required: true,
	})
	public password: string;

	@ApiProperty({
		example: "서반석",
		description: "이름",
		required: true,
	})
	public username: string;

	@ApiProperty({
		example: "01022223333",
		description: "전화번호",
		required: true,
	})
	public mobile: string;

}