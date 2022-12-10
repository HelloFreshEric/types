import { ProductType } from './ProductType';

export type ProductOption = {
    handle: string;
    products: ProductType[];
    prefix: string;
    name: string;
};