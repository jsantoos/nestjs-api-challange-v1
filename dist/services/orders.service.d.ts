import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    createOrder(orderData: any): Promise<Order[]>;
    findAllOrders(): Promise<Order[]>;
}
