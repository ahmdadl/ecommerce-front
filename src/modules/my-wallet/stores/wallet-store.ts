import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { WalletEntity } from '../utils/types';

type WalletState = {
    record: WalletEntity;
};
export const walletStore = create<WalletState>(() => ({
    record: {} as WalletEntity,
}));

export const useWalletStore = createZustandSelectors(walletStore);
