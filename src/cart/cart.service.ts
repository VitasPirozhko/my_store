import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from './models/cart.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Product } from 'src/products/models/products.entity';

@Injectable()
export class CartService {
  constructor(@InjectModel(CartItem) private cartRepository: typeof CartItem) {}

  addProductInToUserCart(
    userId: CreateUserDto['id'],
    productId: Product['id'],
  ) {
    return this.cartRepository.create({
      userId,
      productId,
    });
  }

  removeProductInToUserCart(id: number) {
    return this.cartRepository.destroy({
      where: {
        id,
      },
    });
  }
}
