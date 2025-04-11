import { Button } from '@/components/ui/button';
import { cartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import loadingToast from '@/modules/core/utils/methods';
import { Trans, useLingui } from '@lingui/react/macro';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CheckoutPlaceOrderButton() {
    const { t } = useLingui();
    const [loading, setLoading] = useState(false);

    async function createOrder() {
        if (loading) return;

        const { selectedAddress, selectedPaymentMethod } = cartStore.getState();

        // validate cart entries
        if (!selectedAddress) {
            toast.warning(t`Please select shipping address`);
            return;
        }

        if (!selectedPaymentMethod) {
            toast.warning(t`Please select payment method`);
            return;
        }

        setLoading(true);

        loadingToast(
            async () => {
                const response = await cartApi.placeOrder({});

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
