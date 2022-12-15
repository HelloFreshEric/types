import { Delivery } from './Delivery';

export type CustomerDeliveries = {
    count: number;
    total?: number;
    take?: number;
    skip?: number;
    items: Delivery[];
  };