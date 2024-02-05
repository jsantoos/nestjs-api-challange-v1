// src/orders/services/order.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { Asset } from '../entities/asset.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}

  async createOrderWithAsset(orderData: {
    price: number;
    status: string;
    assetData: { symbol: string };
  }): Promise<Order> {
    const { price, status, assetData } = orderData;

    const order = new Order();
    order.price = price;
    order.status = status;

    const asset = await this.assetRepository.findOne({
      where: { symbol: assetData.symbol },
    });

    // Se o ativo não existir, crie um novo
    if (!asset) {
      const newAsset = this.assetRepository.create({
        symbol: assetData.symbol,
      });
      await this.assetRepository.save(newAsset);
      order.asset = newAsset;
    } else {
      order.asset = asset;
    }

    return this.orderRepository.save(order);
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['asset'] });
  }
}
