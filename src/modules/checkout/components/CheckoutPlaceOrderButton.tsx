import { Button } from '@/components/ui/button';
import { cartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import useLocaleStore from '@/modules/core/stores/localeStore';
import loadingToast from '@/modules/core/utils/methods';
import { urls } from '@/modules/core/utils/urls';
import { Trans, useLingui } from '@lingui/react/macro';
import { useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CheckoutPlaceOrderButton() {
    const { t } = useLingui();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function createOrder() {
        if (loading) return;

        const { selectedAddress, selectedPaymentMethod } = cartStore.getState();

        // validate cart entries
        if (!selectedAddress?.id) {
            toast.warning(t`Please select shipping address`);
            return;
        }

        if (!selectedPaymentMethod?.length) {
            toast.warning(t`Please select payment method`);
            return;
        }

        setLoading(true);

        loadingToast(
            async () => {
                const response = await cartApi.placeOrder({
                    address: selectedAddress.id,
                    payment_method: selectedPaymentMethod,
                });

                if (!response) return;

                if (response.record) {
                    toast.success(t`Order placed successfully`);

                    navigate({
                        to:
                            `/${useLocaleStore.getState().locale}/` +
                            urls.profile.orders.view(response.record),
                    });
                }

                return response;
            },
            {
                onFinally: () => {
                    setLoading(false);
                },
            }
        );
    }

    return (
        <Button
            className='w-full'
            size='lg'
            onClick={createOrder}
            disabled={loading}
        >
            {loading && <Loader2 className='h-4 w-4 animate-spin' />}
            <Trans>Place Order</Trans>
        </Button>
    );
}
