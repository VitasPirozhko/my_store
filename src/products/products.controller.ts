import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts() {
    return this.productService.getAll();
  }
}
