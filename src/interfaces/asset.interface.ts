import { Order } from './order.interface';

export interface Asset {
  id: number;
  symbol: string;
  orders?: Order[]; // Relação com as ordens associadas
}
