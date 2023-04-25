import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'cart', timestamps: false })
export class CartItem extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  userId: string;

  @Column
  productId: string;
}
