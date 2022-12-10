import { Subscription } from './Subscription';

type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;

export type PartialSubscriptionData = DeepPartial<Subscription>;