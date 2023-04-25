import { Controller, Post, UseGuards, Headers, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CartService } from './cart.service';
import { decodeAuth } from 'src/helpers';
import { CartItemDto } from './dto/cart-item.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  getProducts(
    @Body() body: CartItemDto,
    @Headers('Authorization') auth: string,
  ) {
    const { id: userId } = decodeAuth(auth);
    const { productId } = body;

    return this.cartService.addProductInToUserCart(userId, +productId);
  }
}
