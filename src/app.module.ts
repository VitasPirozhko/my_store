import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/models/user.entity';
import { AuthController } from './auth/auth.controller';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      autoLoadModels: true,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'my_shop',
      models: [User],
    }),
    AuthModule,
    ProductsModule,
    CartModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
