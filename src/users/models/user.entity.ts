import { Table, Column, Model } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<CreateUserDto> {
  @Column
  username: string;

  @Column
  password: string;
}
