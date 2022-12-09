export type VoucherInfo = {
    discount_value: number;
    voucher_type: string;
    repetition_limit: number;
    repetition_rate: number;
    discount_type: string;
    limit_per_subscription: number;
    limit_per_customer: number;
    shipping_amount: number;
    valid_from: string;
    valid_to: string;
    shipped_discounted_boxes: number;
};
