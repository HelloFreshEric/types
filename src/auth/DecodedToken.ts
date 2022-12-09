export type DecodedToken = {
    exp: number;
    iat?: number;
    iss?: string;
    jti?: string;
}