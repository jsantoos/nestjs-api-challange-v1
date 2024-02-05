// src/orders/controllers/order.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from '../services/orders.service';
import { Order } from '../entities/order.entity';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrderWithAsset(
    @Body()
    orderData: {
      price: number;
      status: string;
      assetData: { symbol: string };
    },
  ): Promise<Order> {
    return this.orderService.createOrderWithAsset(orderData);
  }

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.orderService.getAllOrders();
  }
}
