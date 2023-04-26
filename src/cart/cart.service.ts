import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from './models/cart.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Product } from 'src/products/models/products.entity';
import { ProductService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(
    private productService: ProductService,
    @InjectModel(CartItem) private cartRepository: typeof CartItem,
  ) {}

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

  async getCart(userId: number) {
    const userCart = await this.cartRepository.findAll({
      where: {
        userId,
      },
    });

    const productsIds = userCart.reduce((acc: number[], item) => {
      acc.push(+item.productId);
      return acc;
    }, []);

    return await this.productService.getProductsById(productsIds);
  }
}
