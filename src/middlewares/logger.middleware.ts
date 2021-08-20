import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	private logger = new Logger('HTTP');

	use(request: Request, response: Response, next: NextFunction): void {
		const { ip, method, originalUrl } = request; // =============================================== 1: 먼저 실행됨
		const userAgent = request.get('user-agent') || '';

		response.on('finish', () => { // =============================================== 3: 세번째 실행됨 (비동기)
			const { statusCode } = response;
			const contentLength = response.get('content-length');
			this.logger.log(
				`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
			)
		})

		next(); // =============================================== 2: 두번째 실행됨
	}
}