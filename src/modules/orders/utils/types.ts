import { CartTotalsEntity } from '@/modules/cart/utils/types';
import { ProductEntity } from '@/modules/shop/utils/types';

// Order item
export type OrderItemEntity = {
    id: string;
    order_id: string;
    product_id: string;
    quantity: number;
    totals: CartTotalsEntity;
    created_at: string;
    product: ProductEntity;
};

// Address details
export type AddressEntity = {
    id: string;
    address_id: string;
    user_id: string;
    government_id: string;
    city_id: string;
    city_title: string;
    shipping_fees: number;
    name: string;
    title: string;
    address: string;
    phone: string;
    created_at: string;
    updated_at: string;
};

// Payment attempt
export type PaymentAttemptEntity = {
    id: string;
    order_id: string;
    payment_method: string; // e.g., "cod" (Cash on Delivery)
    status: string; // e.g., "pending"
    payment_details: null | Record<string, any>; // Flexible for future details
    created_at: string;
    updated_at: string;
};

// Main order record
export type OrderEntity = {
    id: string;
    user_id: string;
    address_id: string;
    status: OrderStatus;
    payment_status: OrderPaymentStatus;
    payment_method: string;
    totals: CartTotalsEntity;
    created_at: string;
    items?: OrderItemEntity[];
    address?: AddressEntity;
    coupon?: null | Record<string, any>;
    paymentAttempts?: PaymentAttemptEntity[];
};

export enum OrderPaymentStatus {
    PENDING = 'pending',
    PAID = 'paid',
    CANCELLED = 'cancelled',
    EXPIRED = 'expired',
}

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}
