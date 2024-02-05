import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { Asset } from '../entities/asset.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly assetRepository;
    constructor(orderRepository: Repository<Order>, assetRepository: Repository<Asset>);
    createOrderWithAsset(orderData: {
        price: number;
        status: string;
        assetData: {
            symbol: string;
        };
    }): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}
