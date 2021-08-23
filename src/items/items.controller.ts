import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { AdditemRequestDto } from './dto/additem.request.dto';
import { ItemsService } from './items.service';

@ApiTags('ITEMS')
@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(@Query() query) {
    return this.itemsService.getItems(query.limitCount);
  }

  @ApiOperation({ summary: '상품 조회' })
  @Get('orderby') // 순서매기기
  getItemsOrdered(@Query() query) {
    return this.itemsService.getItemsOrdered(query.limitCount, query.orderBy);
  }

  // 상품 등록
  @ApiOperation({ summary: '상품 등록' })
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
  addItem(
    @Body() body: AdditemRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.itemsService.addItem(
      body.name,
      body.detail,
      body.price,
      body.access_token,
      file,
    );
  }

  // 아이템 삭제
  @Post('delete')
  deleteItem(@Body() body) {
    return this.itemsService.deleteItem(body.id);
  }
}
