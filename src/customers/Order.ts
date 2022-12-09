import { Subscription, Address, ProductType } from '../subscriptions';

export interface Order {
  unitPrice: number;
  paidPrice: number;
  subscription: Subscription;
  sku: string;
  deliveryDate: Date;
  donationBox: boolean;
  shipped: boolean;
  paymentStatus: string;
  productOrdered: ProductType;
  link?: string;
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}