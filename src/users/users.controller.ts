import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { LoginRequestDto } from './dto/login.request.dto';
import { UsersService } from './users.service';

@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	@ApiOperation({ summary: '내 정보 조회' })	
	getUser(@Body() body: any) {
		return this.usersService.getUserByAccessToken(body.access_token);
	}

	// 회원가입
	@ApiOperation({ summary: '회원가입' })
	@Post('join')
	async join(@Body() body: JoinRequestDto) {
		await this.usersService.join(body.email, body.password, body.username, body.mobile );
	}
	
	// 로그인
	@ApiOperation({ summary: '로그인' })
	@Post('login')
	async login(@Body() body: LoginRequestDto) {
		return await this.usersService.login(body.email, body.password)
	}
}
