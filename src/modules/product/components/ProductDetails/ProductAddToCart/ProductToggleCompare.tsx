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
import { ProductEntity } from '@/modules/shop/utils/types';
import { Trans } from '@lingui/react/macro';

export default function ProductToggleCompare({
    product,
}: {
    product: ProductEntity;
}) {
    const [isLoading, setIsLoading] = useState(false);

    function addToCompare() {
        if (isLoading) return;

        setIsLoading(true);

        // loadingToast(cartApi.add(product.id, quantity), {
        //     onFinally: () => {
        //         setIsLoading(false);
        //     },
        // });
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={product.is_compared ? 'secondary' : 'outline'}
                        size='icon'
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
