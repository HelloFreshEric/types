import { Nullable } from './Nullable';

export type Region = {
    code: string;
    isDeliverable: string;
    link: Nullable<string>;
    id: string;
    name: string;
};