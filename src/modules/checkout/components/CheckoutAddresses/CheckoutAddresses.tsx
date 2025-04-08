import { Home } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cartStore, useCartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import loadingToast from '@/modules/core/utils/methods';
import { Trans } from '@lingui/react/macro';
import CheckoutAddAddress from './CheckoutAddAddress';
import CheckoutAddressRadio from './CheckoutAddressRadio';

export default function CheckoutAddresses() {
    const addresses = useCartStore.use.addresses();

    function setSelectedAddress(addressId: string) {
        loadingToast(cartApi.setAddress(addressId), {
            onFinally: () => {
                cartStore.setState({
                    selectedAddress: addresses?.find((a) => a.id === addressId),
                });
            },
        });
    }

    return (
        <Card>
            <CardHeader className='flex flex-row items-center'>
                <CardTitle className='flex items-center gap-2'>
                    <Home className='h-5 w-5' />
                    <Trans>Shipping Address</Trans>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='space-y-4'>
                    {Boolean(addresses?.length) &&
                        addresses?.map((address) => (
                            <CheckoutAddressRadio
                                key={address.id}
                                address={address}
                            />
                        ))}
                </div>

                <CheckoutAddAddress />
            </CardContent>
        </Card>
    );
}
