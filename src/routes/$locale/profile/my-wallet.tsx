import MyWalletPage from '@/modules/my-wallet/pages/MyWalletPage';
import MyWalletSkeletonPage from '@/modules/my-wallet/pages/MyWalletSkeletonPage';
import { walletApi } from '@/modules/my-wallet/utils/wallet-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/my-wallet')({
    component: MyWalletPage,

    loader: walletApi.load,

    pendingComponent: MyWalletSkeletonPage,
});
