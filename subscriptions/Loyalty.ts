import { Nullable } from './Nullable';

// TODO: Fix this type
type $TSFixMe = any;

export interface Loyalty {
    customer?: $TSFixMe;
    value: number;
    label: string;
    oldDiff: number;
    boxesUntilNextFreebie?: Nullable<number>;
    link?: Nullable<string>;
    id: string;
}
  