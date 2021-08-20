import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {

	constructor(private readonly itemsService: ItemsService) { }

	@Get()
	getItems() {
		return this.itemsService.getItem();
	}

	@Get() // 가격순
	getItemsByPrice() {
		return this.itemsService.getItemsByPrice();
	}

	@Get()
	getItemsByStarCount() {
		return this.itemsService.getItemsByStarCount();
	}

	@Get()
	getItemsByNewest() {
		return this.itemsService.getItemsByNewest();
	}

	
}
