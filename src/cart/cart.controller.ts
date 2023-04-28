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
import { MailService } from 'src/mail/mail.service';

@Controller('cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private mailService: MailService,
  ) {}

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
    return this.cartService.getCart(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/success')
  sendSuccessEmail(@Body() body) {
    this.mailService.sendInviteLink(body.email);
  }
}
