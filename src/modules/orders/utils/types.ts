export type CartTotalsEntity = {
    original: number;
    discount: number;
    taxes: number;
    products: number;
    items: number;
    subtotal: number;
    coupon: number;
    shipping: number;
    total: number;
};

// Product details
export type ProductEntity = {
    id: string;
    category_id: string;
    brand_id: string;
    title: string;
    description: string;
    slug: string;
    is_main: boolean;
    images: string[];
    price: number;
    salePrice: number;
    stock: number;
    sku: string;
    is_active: boolean;
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    created_at: string; // ISO 8601 date string
    updated_at: string;
    deleted_at: string | null;
};

// Order item
export type OrderItemEntity = {
    id: string;
    order_id: string;
    product_id: string;
    quantity: number;
    totals: CartTotalsEntity;
    created_at: string;
    product: Product;
};

// Address details
export type AddressEntity = {
    id: string;
    address_id: string;
    user_id: string;
    government_id: string;
    city_id: string;
    city_title: MultilingualString;
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
