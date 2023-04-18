import { Inject, Injectable } from '@nestjs/common';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  // async findAll(): Promise<User[]> {
  //   return this.usersRepository.findAll<User>();
  // }

  findOne(id: string): Promise<User> {
    return this.usersRepository[0];
    // return this.usersRepository.findOne({
    //   where: {
    //     id,
    //   },
    // });
  }
}
