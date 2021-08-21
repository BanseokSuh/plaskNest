import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdditemRequestDto } from './dto/additem.request.dto';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {

	constructor(private readonly itemsService: ItemsService) { }

	@Get()
	getItems(@Query() query) {
		return this.itemsService.getItems(query.limitCount);
	}

	@Get('orderby') // 순서매기기
	getItemsOrdered(@Query() query) {
		return this.itemsService.getItemsOrdered(query.limitCount, query.orderBy);
	}

	// 상품 등록
	@UseInterceptors(
    FileInterceptor('itemImg', {
      storage: diskStorage({
        destination(req, file, cb) {
          cb(null, 'uploads/');
        },
        filename(req, file, cb) {
          cb(null, file.originalname);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
	@Post('add')
	addItem(@Body() body: AdditemRequestDto, @UploadedFile() file: Express.Multer.File) {
		return this.itemsService.addItem(body.name, body.detail, body.price, body.access_token, file)
	}
}
