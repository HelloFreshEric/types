import { ProductFamilyConfiguration } from './ProductFamilyConfiguration';
import { ProductFamilyContents } from './ProductFamilyContents';
import { ProductFamilyTemplate } from './ProductFamilyTemplate';
import { ProductFamilyIcons } from './ProductFamilyIcons';

// TODO: Fix this type
type $TSFixMe = any;

export type ProductFamily = {
    handle: string;
    name: string;
    headline: string;
    converts: null;
    configuration: ProductFamilyConfiguration;
    tags: string[];
    prefix: string;
    isActive: boolean;
    showMobile: boolean;
    recipeFamily: string;
    recipeWeek: null;
    compatible: $TSFixMe[];
    template: ProductFamilyTemplate;
    contents: ProductFamilyContents;
    sort: number;
    promotes: $TSFixMe[];
    icons: ProductFamilyIcons;
    id: string;
    country: string;
    createdAt: string | null;
    updatedAt: string | null;
};