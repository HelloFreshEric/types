import { Nullable } from './Nullable';
import { ProductSpec } from './ProductSpec';
import { ProductFamily } from './ProductFamily';

// TODO: Fix this type
type $TSFixMe = any;

export type ProductType = {
    isActive: boolean;
    handle: string;
    legacyHandles: $TSFixMe[];
    legacyIds: $TSFixMe[];
    mealSwap: boolean;
    mealSwapDefaultChoice: string[];
    swappableMeals: string[];
    presetIsEnabled: boolean;
    productName: string;
    price: number;
    oneOffPrice: number;
    recurringPrice: number;
    specialFee: number;
    isPublic: boolean;
    isSubscribable: boolean;
    isAvailableForExtraMeals: boolean;
    specs: ProductSpec;
    sort: number;
    family: ProductFamily;
    weekWithLatestMenu: Nullable<string>;
    shippingPrice: number;
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
    country: string;
};