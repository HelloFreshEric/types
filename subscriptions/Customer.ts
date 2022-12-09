import { Nullable } from './Nullable';
import { Loyalty } from './Loyalty';

// TODO: Fix this type
type $TSFixMe = any;

export type Customer = {
    id: string;
    email: string;
    uuid: string;
    incrementId: string;
    prefix?: Nullable<string>;
    firstName: string;
    middleName?: Nullable<string>;
    lastName: string;
    birthday?: Nullable<string>;
    gender?: Nullable<string>;
    isConfirmed: boolean;
    salesRuleCode: string;
    lastLoginAt: string;
    deactivatedAt?: Nullable<string>;
    blockedAt?: Nullable<string>;
    cancellationDate: string;
    shopperRef: string;
    partner?: $TSFixMe;
    allowSelfreactivation: number;
    sendEmail: boolean;
    locale: string;
    status: string;
    referenceEmail?: Nullable<string>;
    cancellationStep: number;
    loyalty: Loyalty;
    socialLogin?: $TSFixMe;
    passwordless?: $TSFixMe;
    updatedAt: string;
  };