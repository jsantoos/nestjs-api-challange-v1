import { OrderService } from '../services/orders.service';
import { Order } from '../entities/order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrderWithAsset(orderData: {
        price: number;
        status: string;
        assetData: {
            symbol: string;
        };
    }): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}
