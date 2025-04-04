import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { CartEntity, CartResponse } from '../utils/types';

export const cartStore = create<CartResponse>((set, get) => ({
    cart: {} as CartEntity,
    addresses: [],
    paymentMethods: [],
}));

export const useCartStore = createZustandSelectors(cartStore);
