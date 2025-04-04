import { Button } from '@/components/ui/button';
import loadingToast from '@/modules/core/utils/methods';
import { Trans } from '@lingui/react/macro';
import { Loader2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { cartApi } from '../utils/cart-api';

export default function ClearCartButton() {
    const [isLoading, setIsLoading] = useState(false);

    function clearCart() {
        if (isLoading) return;
        setIsLoading(true);

        loadingToast(cartApi.reset(), {
            onFinally: () => {
                setIsLoading(false);
            },
        });
    }

    return (
        <Button
            variant='outline'
            onClick={clearCart}
            className='w-full sm:w-auto text-destructive'
            disabled={isLoading}
        >
            {isLoading ? (
                <Loader2 className='h-4 w-4 animate-spin me-2' />
            ) : (
                <Trash2 className='h-4 w-4 me-2' />
            )}
            <Trans>Clear Cart</Trans>
        </Button>
    );
}
