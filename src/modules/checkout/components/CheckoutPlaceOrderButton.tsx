import { Button } from '@/components/ui/button';
import { cartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import { CartResponse } from '@/modules/cart/utils/types';
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

        const cartState = cartStore.getState();
        const { selectedAddress, selectedPaymentMethod, receipt } = cartState;

        // validate cart entries
        const isValid = await validateCartEntries(cartState);

        if (!isValid) return;

        setLoading(true);

        loadingToast(
            async () => {
                const response = await cartApi.placeOrder({
                    address: selectedAddress?.id,
                    payment_method: selectedPaymentMethod,
                    receipt,
                });

                if (!response) return;

                if (response.record) {
                    toast.success(t`Order placed successfully`);

                    navigate({
                        to:
                            `/${useLocaleStore.getState().locale}/` +
                            urls.profile.orders.view(response.record),
                    });

                    cartStore.setState({
                        cart: {} as CartResponse['cart'],
                        selectedAddress: null,
                        selectedPaymentMethod: null,
                        receipt: null,
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

    async function validateCartEntries(state: CartResponse) {
        return new Promise((resolve, reject) => {
            const { selectedAddress, selectedPaymentMethod, paymentMethods } =
                state;

            if (!selectedAddress?.id) {
                toast.warning(t`Please select shipping address`);
                resolve(false);
            }

            if (!selectedPaymentMethod?.length) {
                toast.warning(t`Please select payment method`);
                resolve(false);
            }

            const paymentMethod = paymentMethods?.find(
                (method) => method.code === selectedPaymentMethod
            )!;

            if (paymentMethod.require_receipt && !state.receipt) {
                toast.warning(t`Please upload receipt`);
                resolve(false);
            }

            resolve(true);
        });
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
