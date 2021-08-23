import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from 'src/entities/Items';
import { Users } from 'src/entities/Users';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items) private itemsRepository: Repository<Items>,
    private readonly usersService: UsersService,
  ) {}

  async getItems(limitCount: number) {
    const items = await this.itemsRepository
      .createQueryBuilder('items')
      .limit(limitCount)
      .getMany();
    return items;
  }

  // 순서에 따른 조회
  async getItemsOrdered(limitCount: number, orderBy: string) {
    let orderedItems;
    // 최신순, 낮은가격순, 높은가격순, 별점순
    switch (orderBy) {
      case 'newest':
        orderedItems = await this.getItemsOrderByNewest(limitCount);
        break;

      case 'highest':
        orderedItems = await this.getItemsOrderByHighest(limitCount);
        break;

      case 'lowest':
        orderedItems = await this.getItemsOrderByLowest(limitCount);
        break;

      case 'starCount':
        orderedItems = await this.getItemsOrderByStarCount(limitCount);
        break;
    }

    return orderedItems;
  }

  async getItemsOrderByNewest(limitCount) {
    const items = await this.itemsRepository
      .createQueryBuilder('items')
      .orderBy('items.createdAt', 'DESC')
      .take(limitCount)
      .getMany();
    return items;
  }
  async getItemsOrderByHighest(limitCount) {
    const items = await this.itemsRepository
      .createQueryBuilder('items')
      .orderBy('items.price', 'DESC')
      .take(limitCount)
      .getMany();
    return items;
  }
  async getItemsOrderByLowest(limitCount) {
    const items = await this.itemsRepository
      .createQueryBuilder('items')
      .orderBy('items.price', 'ASC')
      .take(limitCount)
      .getMany();
    return items;
  }
  async getItemsOrderByStarCount(limitCount) {
    const items = await this.itemsRepository
      .createQueryBuilder('items')
      .orderBy('items.starCount', 'DESC')
      .take(limitCount)
      .getMany();
    return items;
  }

  async addItem(
    name: string,
    detail: string,
    price: number,
    access_token: string,
    file: Express.Multer.File,
  ) {
    try {
      const user = await this.usersService.getUserByAccessToken(access_token);
      if (!user) {
        throw new UnauthorizedException('유효하지 않은 토큰입니다.');
      }

      const userId = user.id;
      const itemObj: object = {
        name,
        detail,
        price,
        imgPath: `${process.env.SERVER_URL}/${file.path}`,
        user: userId,
      };

      await this.itemsRepository.save(itemObj);
    } catch (e) {
      throw e;
    }
  }

  async deleteItem(target) {
    const result = await this.itemsRepository.delete({
      id: target,
    });

    if (result.affected !== 0) {
      return {
        message: '아이템이 삭제되었습니다.',
      };
    } else {
      return {
        message: '삭제된 아이템이 없습니다.',
      };
    }
  }
}
