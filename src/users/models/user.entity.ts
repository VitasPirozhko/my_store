import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<CreateUserDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  username: string;

  @Column
  password: string;
}
