## 선행사항

- 로컬 환경 mysql에 plaskNest라는 데이터베이스가 있어야함
- .env 파일에 환경변수가 설정되어 있어야함

## 프로젝트 실행 순서

1. 로컬 환경에 <code>git clone 레포주소</code>
2. <code>npm install</code>로 모듈 설치
3. ormconfig.ts 파일에서 synchronize: true로 설정하고 <code>npm run start:dev</code>로 서버 실행 ===> entities 기반으로 데이터베이스에 테이블 생성해줌
4. 서버 종료 후 ormconfig.ts 파일에서 synchronize: false로 되돌린 후 위 명령어로 다시 서버 실행
5. <code>npm run seed:run</code> 실행 ===> seed 데이터베이스 생성해줌
6. 클라이언트 화면에서 테스트

## Swagger 문서

- <code>localhost:3095/api</code>에 접속해서 확인할 수 있음
