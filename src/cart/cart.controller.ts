import {
  Controller,
  Post,
  UseGuards,
  Headers,
  Body,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CartService } from './cart.service';
import { decodeAuth } from 'src/helpers';
import { CartItemDto } from './dto/cart-item.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addProductInToCart(
    @Body() body: CartItemDto,
    @Headers('Authorization') auth: string,
  ) {
    const { id: userId } = decodeAuth(auth);
    const { productId } = body;

    return this.cartService.addProductInToUserCart(userId, +productId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/')
  deleteProductFromCart(@Param('id') id: number) {
    return this.cartService.removeProductInToUserCart(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getCart(@Headers('Authorization') auth: string) {
    const { id: userId } = decodeAuth(auth);
    console.log(userId);
    return this.cartService.getCart(userId);
  }
}
