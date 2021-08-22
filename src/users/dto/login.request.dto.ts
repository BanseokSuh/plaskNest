import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

// export class LoginRequestDto extends PickType(Users, ['email', 'password'] as const) { }
export class LoginRequestDto {
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
}