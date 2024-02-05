import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @OneToMany(() => Order, (order) => order.asset)
  orders: Order[];
}
