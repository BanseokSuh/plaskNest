import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { LoginRequestDto } from './dto/login.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	getUser(@Body() body: any) {
		return this.usersService.getUserByAccessToken(body.access_token);
	}

	// 회원가입
	@Post('join')
	async join(@Body() body: JoinRequestDto) {
		await this.usersService.join(body.email, body.password, body.username, body.mobile );
	}
	
	// 로그인
	@Post('login')
	async login(@Body() body: LoginRequestDto) {
		return await this.usersService.login(body.email, body.password)
	}


}
