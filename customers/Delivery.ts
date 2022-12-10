export type Delivery = {
  actionable: boolean;
  allowedActions: {
    donate: boolean;
    mealSwap: boolean;
    oneOffChange: boolean;
    pause: boolean;
    updateDeliveryAddress: boolean;
    updateDeliveryWeekday: boolean;
    updatePaymentMethod: boolean;
  };
  availableOneOffOptions: string[];
  cutoffDate: string;
  deliveryBlocked: boolean;
  deliveryDate: boolean;
  deliveryOption: {
    deliveryDay: 1;
    deliveryFrom: string;
    deliveryName: string;
    deliveryTo: string;
    handle: string;
    price: number;
    priceInCents: number;
  };
  holidayDelivery: boolean;
  holidayMessage: string;
  id: string;
  isHolidayShiftVisible: boolean;
  orderId: string;
  prepaid: boolean;
  product: {
    family: {
      handle: string;
      name: string;
      tags: string[];
    };
    handle: string;
    price: number;
    productName: string;
    shippingPrice: number;
    specialFee: number;
    specs: {
      meals: number;
      recurrency: number;
      size: number;
    };
  };
  state: string;
  status: string;
  subStatus: string;
  subscriptionId: number;
  tracking: string;
};