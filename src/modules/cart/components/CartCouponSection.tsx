import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import loadingToast from '@/modules/core/utils/methods';
import { zodResolver } from '@hookform/resolvers/zod';
import { i18n } from '@lingui/core';
import { Trans } from '@lingui/react/macro';
import { Loader2, Tag, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCartStore } from '../stores/cart-store';
import { cartApi } from '../utils/cart-api';

const couponSchema = z.object({
    couponCode: z
        .string()
        .min(1, { message: i18n._('Coupon code is required') })
        .max(50, {
            message: i18n._('Coupon code must be 50 characters or less'),
        }),
});

type CouponFormValues = z.infer<typeof couponSchema>;

export default function CartCouponSection() {
    const currentCoupon = useCartStore.use.cart().coupon?.code;
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<CouponFormValues>({
        resolver: zodResolver(couponSchema),
        defaultValues: {
            couponCode: currentCoupon || '',
        },
    });

    async function handleApplyCoupon(values: CouponFormValues) {
        setIsLoading(true);

        loadingToast(cartApi.applyCoupon(values.couponCode), {
            onFinally: () => {
                setIsLoading(false);
            },
        });
    }

    async function clearCoupon() {
        setIsLoading(true);

        loadingToast(cartApi.removeCoupon(), {
            onFinally: () => {
                setIsLoading(false);
                form.resetField('couponCode');
            },
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleApplyCoupon)}
                className='space-y-2'
            >
                <FormItem>
                    <FormLabel className='text-sm font-medium'>
                        <Trans>Add Coupon Code</Trans>
                    </FormLabel>
                    <div className='flex gap-2'>
                        <FormField
                            control={form.control}
                            name='couponCode'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormControl>
                                        <div className='relative'>
                                            <Tag className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                                            <Input
                                                type='text'
                                                placeholder={i18n._(
                                                    'Enter coupon code'
                                                )}
                                                className='pl-8'
                                                disabled={isLoading}
                                                {...field}
                                            />

                                            {currentCoupon && (
                                                <Button
                                                    type='button'
                                                    variant='ghost'
                                                    size='icon'
                                                    className='absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-destructive'
                                                    onClick={clearCoupon}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        <Loader2 className='h-4 w-4 animate-spin' />
                                                    ) : (
                                                        <X className='h-4 w-4' />
                                                    )}
                                                </Button>
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage />{' '}
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            variant='secondary'
                            size='sm'
                            className='shrink-0'
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Loader2 className='h-4 w-4 animate-spin mr-2' />
                            )}
                            <Trans>Apply</Trans>
                        </Button>
                    </div>
                </FormItem>
            </form>
        </Form>
    );
}
