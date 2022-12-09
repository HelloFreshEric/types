import { Nullable } from './Nullable';

export type DeliveryOption = {
    handle: string;
    deliveryDay: number;
    packingDay?: number;
    deliveryFrom: string;
    deliveryTo: string;
    trackingCutoff?: string;
    deliveryName: string;
    cutoff: string;
    shipper: string;
    sort?: Nullable<string>;
    type?: Nullable<string>;
    isDefault: boolean;
    price?: Nullable<string>;
    priceInCents?: Nullable<string>;
    availableOnCheckout: boolean;
    riskFactor: number;
    utilizationFactor: Nullable<number>;
    varianceFactor: Nullable<number>;
    link?: Nullable<string>;
    id: string;
    country: string;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
};