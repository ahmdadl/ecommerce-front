import { Check } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { AddressEntity } from '@/modules/addresses/utils/types';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import { Trans } from '@lingui/react/macro';

export default function CheckoutAddressRadio({
    address,
}: {
    address: AddressEntity;
}) {
    const selectedAddress = useCartStore.use.selectedAddress();

    return (
        <div
            className={`flex items-start space-x-3 border rounded-lg p-4 ${
                selectedAddress?.id === address.id
                    ? 'border-primary'
                    : 'border-border'
            }`}
        >
            <RadioGroupItem
                value={address.id}
                id={`address-${address.id}`}
                className='mt-1'
            />
            <div className='flex-1'>
                <Label
                    htmlFor={`address-${address.id}`}
                    className='font-medium'
                >
                    {address.first_name} {address.last_name}
                    {address.is_default && (
                        <span className='ml-2 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded'>
                            <Trans>Default</Trans>
                        </span>
                    )}
                </Label>
                <p className='text-sm text-muted-foreground mt-1'>
                    {address.address}
                </p>
                <p className='text-sm text-muted-foreground'>
                    {address.city.title}, {address.government.title}
                </p>
            </div>
            {selectedAddress?.id === address.id && (
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                    <Check className='h-3 w-3' />
                </div>
            )}
        </div>
    );
}
