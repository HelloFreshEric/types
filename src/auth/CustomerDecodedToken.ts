import { DecodedToken } from './DecodedToken';
import { DecodedTokenMetadata } from './DecodedTokenMetadata';

export type CustomerDecodedToken = DecodedToken & {
    blocked: boolean;
    country: string;
    email: string;
    id: string;
    metadata: DecodedTokenMetadata;
    roles: string[];
    username: string;
    sub: string;
    user_id: string;
    source_system: { String: string; Valid: boolean };
}