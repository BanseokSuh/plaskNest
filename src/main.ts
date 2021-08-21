import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './httpException.filter';

// hot reloading
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { // 클라에서 서버단의 정적 이미지를 보기 위해서 필요함
    prefix: '/uploads',
  });

  // cors 설정
  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });
  
  // swagger
  const config = new DocumentBuilder()
    .setTitle('plaskNest API')
    .setDescription('plaskNest 개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  

  await app.listen(port);
  console.log(`listening on port ${port}`);

  // hot reloading
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }

  
}
bootstrap();
