import { SocialLogin } from './SocialLogin';

export interface Customer {
    id: string;
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    activeSubscriptionId: number;
    freebiesNotSentCount: number;
    subscriptionIds: number[];
    activeSubscriptionSkus: string;
    birthday: string | null;
    socialLogin: SocialLogin;
    salesRuleCode: string;
    experiments: string[];
    boxesReceived: number;
    locale: string;
    createdAt: Date;
  }