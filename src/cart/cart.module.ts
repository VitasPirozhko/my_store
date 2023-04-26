import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItem } from './models/cart.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [SequelizeModule.forFeature([CartItem]), ProductsModule],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
