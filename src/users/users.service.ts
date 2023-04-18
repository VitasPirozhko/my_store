import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User) {}

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        username,
      },
    });
  }

  createUser(user: User): Promise<User> {
    console.log(user);
    return this.usersRepository.create({ ...user });
  }
}
