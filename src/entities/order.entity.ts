// src/entities/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Asset } from './asset.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Asset)
  asset: Asset;

  @Column()
  price: number;

  @Column()
  status: string; // open, pending, closed
}
