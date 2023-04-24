import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const passwordsIsEqual = await bcrypt.compare(pass, user.password);

    if (passwordsIsEqual) {
      const { password, ...result } = user;
      return result;
    }
    throw new ForbiddenException('Invalid password');
  }

  async login(loginUserBody: any) {
    const user = await this.usersService.findOne(loginUserBody.username);
    console.log(user);
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        id: user.id,
      }),
    };
  }

  async createUser(user: CreateUserDto) {
    return await this.usersService.createUser(user);
  }
}
