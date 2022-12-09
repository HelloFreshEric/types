import { PublicAuth } from './PublicAuth';
import { CustomerDecodedToken } from './CustomerDecodedToken';

export type UserAuth = PublicAuth & {
    refresh_token: string;
    refresh_expires_in?: number;
    user_data?: CustomerDecodedToken;
    issued_at?: number;
    scope?: string;
}