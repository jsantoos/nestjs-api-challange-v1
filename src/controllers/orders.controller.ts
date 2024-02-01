import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { Order } from '../entities/order.entity';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() orderData: any): Promise<Order[]> {
    return this.ordersService.createOrder(orderData);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAllOrders();
  }
}
