import { AddressEntity } from '@/modules/addresses/utils/types';
import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { CartEntity, PaymentMethodEntity } from '../utils/types';

type CartState = {
    cart: CartEntity;
    addresses?: AddressEntity[];
    paymentMethods?: PaymentMethodEntity[];
};

export const cartStore = create<CartState>((set, get) => ({
    cart: {} as CartEntity,
    addresses: [],
    paymentMethods: [],
}));

export const useCartStore = createZustandSelectors(cartStore);
