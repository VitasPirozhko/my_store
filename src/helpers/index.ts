import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export const decodeAuth = (authBody: string) => {
  const token = authBody.replace('Bearer ', '');
  const jwt = new JwtService();
  return jwt.decode(token, { json: true }) as CreateUserDto;
};
