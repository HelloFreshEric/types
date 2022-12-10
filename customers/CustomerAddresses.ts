import { CustomerAddress } from './CustomerAddress'

export type CustomerAddresses = {
  count: number;
  total: number | null;
  take: number | null;
  skip: number | null;
  items: CustomerAddress[];
};