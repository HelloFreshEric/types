export type PublicAuth = {
    access_token: string;
    expires_in: number;
    token_type: string;
    issued_at?: number;
    scope?: string;
}