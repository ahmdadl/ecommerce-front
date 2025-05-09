import { PaymentMethodEntity } from '@/modules/cart/utils/types';
import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';

type WalletPopupState = {
    isOpened: boolean;
    paymentMethods: PaymentMethodEntity[];
    receipt: null | string;
};

export const walletPopupStore = create<WalletPopupState>(() => ({
    isOpened: false,
    paymentMethods: [],
    receipt: null,
}));

export const useWalletPopupStore = createZustandSelectors(walletPopupStore);
