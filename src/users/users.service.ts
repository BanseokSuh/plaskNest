import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService { // 서비스와 테이블을 레포지토리가 이어준다.
	constructor(
		@InjectRepository(Users) private usersRepository: Repository<Users>,
		private jwtService: JwtService,
	) {}

	async getUserByAccessToken(accessToken) {
		try {
      const target = await this.jwtService.verify(accessToken);
      const { id } = target;
      const user = await this.usersRepository.findOne({ id });
      const { password, salt, ...result } = user;
      return result;
    } catch (error) {
      throw new UnauthorizedException('유효하지 않은 토큰입니다.');
    }
	}

	// 회원가입
	async join(email: string, password: string, username: string, mobile: string) {
		const user = await this.usersRepository.findOne({ where: { email } });

		if (user) {
			// 이미 존재하는 유저
			throw new UnauthorizedException('이미 존재하는 사용자입니다');
		} else {

			if (!this.validateCheck(password)) {
				throw new UnauthorizedException('비밀번호가 올바르지 않습니다.');
			}

			const salt = await bcrypt.genSalt(); // 솔트
			const hashedPassword = await bcrypt.hash(password, salt);
			const mobileStr = `${mobile.substring(0, 3)}-${mobile.substring(3, mobile.length-4)}-${mobile.slice(-4, mobile.length)}`

			await this.usersRepository.save({
				email,
				password: hashedPassword,
				username,
				mobile: mobileStr,
				salt
			})
		}
	}

	validateCheck(password) {
		const REGEX_PASSWORD = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
		if (REGEX_PASSWORD.test(password)) {
			return true;
		}
		return false;
	}

	// 로그인
	async login(email: string, password: string) {
		try {
			const user = await this.usersRepository.findOne({ where: { email } });
			if (!user) {
				throw new UnauthorizedException('조회된 사용자가 없습니다.');
			}
	
			const hashedPassword = await bcrypt.hash(password, user.salt);

			if (user.password === hashedPassword) {
				const { password, salt, ...payload } = user;
				const id = user.id;
				const access_token = this.jwtService.sign({ id });
				return { access_token, payload };
			}
		} catch (e) {
			throw e;
		}
	}
}
