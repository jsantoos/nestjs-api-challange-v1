import { Asset } from './asset.interface';
export interface Order {
    id: number;
    asset: Asset;
    price: number;
    status: string;
}
