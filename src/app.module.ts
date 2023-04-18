import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/models/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      // host: process.env.MYSQL_HOST,
      // port: +process.env.MYSQL_PORT,
      // username: process.env.MYSQL_USER,
      // password: process.env.MYSQL_PASSWORD,
      // database: process.env.MYSQL_DATABASE,
      autoLoadModels: true,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'my_shop',
      models: [User],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
