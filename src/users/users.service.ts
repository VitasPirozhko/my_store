import { InjectModel } from '@nestjs/sequelize';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from './models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User) {}

  findOne(username: string): Promise<CreateUserDto> {
    return this.usersRepository.findOne({
      where: {
        username,
      },
    });
  }

  createUser(user: CreateUserDto) {
    return this.findOne(user.username).then(async (data) => {
      if (!!data) throw new ForbiddenException('User already exists');

      const cryptPass = await bcrypt.hash(user.password, 5);
      this.usersRepository.create({
        ...user,
        password: cryptPass,
      });
      return 'Created';
    });
  }
}
