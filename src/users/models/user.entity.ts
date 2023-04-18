import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  userId: number;

  @Column
  username: string;

  @Column
  password: string;
}
