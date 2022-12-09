import { Nullable } from './Nullable';

export type Product = {
    sku: string;
    unitPrice: number;
    maintainedUnitPrice: number;
    link?: Nullable<string>;
    id: string;
};