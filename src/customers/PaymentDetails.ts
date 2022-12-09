export type PaymentDetails = {
    pts_token_id: number;
    id: number;
    token: string;
    identifier: string;
    type: string;
    provider: string;
    method: string;
    customer_reference: string;
    is_active: boolean;
    is_verified: boolean;
    created_at: Date;
    details: {
      payer_email?: string;
      shopper_email?: string;
      owner_name?: string;
      holder_name?: string;
      iban?: string;
      expiry_month: string;
      expiry_year: string;
      number: string;
    };
    subDetails?: {
      id: string;
      name: string;
      handle: string;
    };
  };