import { Items } from '../../entities/Items'
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateInitialData implements Seeder {
	public async run(factory: Factory, connection: Connection): Promise<any> {
		await connection
			.createQueryBuilder()
			.insert()
			.into(Items)
			.values([
				{id: 1, name: 'itemname1', detail: '아이템입니다. 좋아요.', price: 10000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 2, name: 'itemname2', detail: '아이템입니다. 좋아요.', price: 20000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 3, name: 'itemname3', detail: '아이템입니다. 좋아요.', price: 30000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 4, name: 'itemname4', detail: '아이템입니다. 좋아요.', price: 40000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 5, name: 'itemname5', detail: '아이템입니다. 좋아요.', price: 50000, starCount: '1', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 6, name: 'itemname6', detail: '아이템입니다. 좋아요.', price: 60000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 7, name: 'itemname7', detail: '아이템입니다. 좋아요.', price: 70000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 8, name: 'itemname8', detail: '아이템입니다. 좋아요.', price: 80000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 9, name: 'itemname9', detail: '아이템입니다. 좋아요.', price: 90000, starCount: '1', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 10, name: 'itemname10', detail: '아이템입니다. 좋아요.', price: 10000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 11, name: 'itemname11', detail: '아이템입니다. 좋아요.', price: 20000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 12, name: 'itemname12', detail: '아이템입니다. 좋아요.', price: 30000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 13, name: 'itemname13', detail: '아이템입니다. 좋아요.', price: 40000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 14, name: 'itemname14', detail: '아이템입니다. 좋아요.', price: 50000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 15, name: 'itemname15', detail: '아이템입니다. 좋아요.', price: 60000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 16, name: 'itemname16', detail: '아이템입니다. 좋아요.', price: 70000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 17, name: 'itemname17', detail: '아이템입니다. 좋아요.', price: 80000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 18, name: 'itemname18', detail: '아이템입니다. 좋아요.', price: 90000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 19, name: 'itemname19', detail: '아이템입니다. 좋아요.', price: 100000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 20, name: 'itemname20', detail: '아이템입니다. 좋아요.', price: 210000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 21, name: 'itemname21', detail: '아이템입니다. 좋아요.', price: 310000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 22, name: 'itemname22', detail: '아이템입니다. 좋아요.', price: 410000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 23, name: 'itemname23', detail: '아이템입니다. 좋아요.', price: 510000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 24, name: 'itemname24', detail: '아이템입니다. 좋아요.', price: 610000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 25, name: 'itemname25', detail: '아이템입니다. 좋아요.', price: 710000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 26, name: 'itemname26', detail: '아이템입니다. 좋아요.', price: 810000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 27, name: 'itemname27', detail: '아이템입니다. 좋아요.', price: 910000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 28, name: 'itemname28', detail: '아이템입니다. 좋아요.', price: 1010000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 29, name: 'itemname29', detail: '아이템입니다. 좋아요.', price: 1110000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 30, name: 'itemname30', detail: '아이템입니다. 좋아요.', price: 1210000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 31, name: 'itemname31', detail: '아이템입니다. 좋아요.', price: 1210000, starCount: '1', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 32, name: 'itemname32', detail: '아이템입니다. 좋아요.', price: 1310000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 33, name: 'itemname33', detail: '아이템입니다. 좋아요.', price: 1410000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 34, name: 'itemname34', detail: '아이템입니다. 좋아요.', price: 1510000, starCount: '2', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 35, name: 'itemname35', detail: '아이템입니다. 좋아요.', price: 1610000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 36, name: 'itemname36', detail: '아이템입니다. 좋아요.', price: 1710000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 37, name: 'itemname37', detail: '아이템입니다. 좋아요.', price: 1810000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 38, name: 'itemname38', detail: '아이템입니다. 좋아요.', price: 1910000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 39, name: 'itemname39', detail: '아이템입니다. 좋아요.', price: 1000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 40, name: 'itemname40', detail: '아이템입니다. 좋아요.', price: 2000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 41, name: 'itemname41', detail: '아이템입니다. 좋아요.', price: 1000, starCount: '4', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 42, name: 'itemname42', detail: '아이템입니다. 좋아요.', price: 7000, starCount: '3', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 43, name: 'itemname43', detail: '아이템입니다. 좋아요.', price: 1000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 44, name: 'itemname44', detail: '아이템입니다. 좋아요.', price: 130000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 45, name: 'itemname45', detail: '아이템입니다. 좋아요.', price: 120000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 46, name: 'itemname46', detail: '아이템입니다. 좋아요.', price: 80000, starCount: '4.5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 47, name: 'itemname47', detail: '아이템입니다. 좋아요.', price: 20000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 48, name: 'itemname48', detail: '아이템입니다. 좋아요.', price: 60000, starCount: '3.5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 49, name: 'itemname49', detail: '아이템입니다. 좋아요.', price: 40000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
				{id: 50, name: 'itemname50', detail: '아이템입니다. 좋아요.', price: 30000, starCount: '5', imgPath: 'http://localhost:3095/uploads/IMG_0677.JPG'},
			])
		  .execute()
	}
}