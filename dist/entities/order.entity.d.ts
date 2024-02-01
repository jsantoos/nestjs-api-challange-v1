import { Asset } from './asset.entity';
export declare class Order {
    id: number;
    asset: Asset;
    price: number;
    status: string;
}
