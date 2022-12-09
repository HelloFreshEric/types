import { Nullable } from './Nullable';

export type Country = {
    iso2Code: string;
    iso3Code: string;
    link?: Nullable<string>;
    id: string;
    name: string;
};