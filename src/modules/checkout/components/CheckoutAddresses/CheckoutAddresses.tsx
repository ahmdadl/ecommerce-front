import { Home, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
import { cartStore, useCartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import loadingToast from '@/modules/core/utils/methods';
import { Trans } from '@lingui/react/macro';
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
                <RadioGroup
                    defaultValue={cartStore.getState().selectedAddress?.id}
                    onValueChange={setSelectedAddress}
                    className='space-y-4'
                >
                    {Boolean(addresses?.length) &&
                        addresses?.map((address) => (
                            <CheckoutAddressRadio
                                key={address.id}
                                address={address}
                            />
                        ))}
                </RadioGroup>

                <Button
                    variant='outline'
                    className='mt-4 flex items-center gap-1'
                >
                    <Plus className='h-4 w-4' />
                    <Trans>Add New Address</Trans>
                </Button>
            </CardContent>
        </Card>
    );
}
