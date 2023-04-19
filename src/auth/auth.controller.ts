import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: CreateUserDto) {
    return this.authService.login(body);
  }

  @Post('registation')
  async registration(@Body() body: CreateUserDto) {
    return this.authService.createUser(body);
  }
}
