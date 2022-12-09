import { AddressCountry } from './AddressCountry';
import { AddressRegion } from './AddressRegion';

export type CustomerAddress = {
    prefix: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    gender: string | null;
    address1: string | null;
    address1Street: string | null;
    address1No: string | null;
    address2: string | null;
    address2Comment: string | null;
    address2Comment2: string | null;
    company: string | null;
    city: string | null;
    postcode: string;
    phone: string | null;
    country: AddressCountry;
    region: AddressRegion;
    isDefaultBilling: boolean;
    isDefaultShipping: boolean;
    isOffice: boolean;
    isUspAlternativeDeliveryPermission: string | null;
    uspAlternativeDeliveryComment: string | null;
    isBilling: boolean;
    pupLabelName: string | null;
    pupConsigneeStreet1: string | null;
    pupLabelStreet: string | null;
    pupZip: string | null;
    pupCity: string | null;
    pupApid: string | null;
    pupReference: string | null;
    createdAt: Date;
    updatedAt: Date;
    link: null;
    id: string;
    subscriptions: [];
};