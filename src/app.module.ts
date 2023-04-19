import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/models/user.entity';
import { AuthController } from './auth/auth.controller';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';

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
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
