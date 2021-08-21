import { PickType } from '@nestjs/swagger';
import { Items } from 'src/entities/Items';

export class AdditemRequestDto extends PickType(Items, ['name', 'detail', 'price']) {
	public access_token: string;
}