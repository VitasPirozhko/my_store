import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productsRepository: typeof Product,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }
}
