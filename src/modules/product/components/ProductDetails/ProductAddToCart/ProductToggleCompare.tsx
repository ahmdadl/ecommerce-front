import { BarChart2, Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { compareApi } from '@/modules/compare-list/utils/compare-api';
import { userStore } from '@/modules/core/stores/userStore';
import loadingToast from '@/modules/core/utils/methods';
import { productStore } from '@/modules/product/stores/product-store';
import { ProductEntity } from '@/modules/shop/utils/types';
import { Trans, useLingui } from '@lingui/react/macro';
import { toast } from 'sonner';

export default function ProductToggleCompare({
    product,
}: {
    product: ProductEntity;
}) {
    const { t } = useLingui();
    const [isLoading, setIsLoading] = useState(false);

    function addToCompare() {
        if (isLoading) return;

        if (userStore.getState().isGuest()) {
            toast.error(t`You must be logged in to compare products`);
            return;
        }

        setIsLoading(true);

        loadingToast(compareApi.add(product.id), {
            onSuccess: () => {
                setIsLoading(false);
                productStore.setState({
                    record: {
                        ...product,
                        is_compared: true,
                    },
                });
            },
        });
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={product.is_compared ? 'secondary' : 'outline'}
                        size='icon'
                        onClick={addToCompare}
                        className={cn(
                            product.is_compared && 'fill-blue-600 text-blue-500'
                        )}
                        disabled={isLoading || product.is_compared}
                    >
                        {isLoading ? (
                            <Loader2 className='h-4 w-4 animate-spin' />
                        ) : (
                            <BarChart2
                                className={cn(
                                    'h-4 w-4',
                                    product.is_compared &&
                                        'fill-blue-600 text-blue-500'
                                )}
                            />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        <Trans>Add to Compare</Trans>
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
