import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/modules/core/components/HeroSection';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { CartItemCard } from '../components/CartItemCard';
import CartTotals from '../components/CartTotals';
import ClearCartButton from '../components/ClearCartButton';
import { useCartStore } from '../stores/cart-store';
import { CartEntity } from '../utils/types';

const mockedCart: CartEntity = {
    id: '01jqz5n8c5ava1sxt9yknw9z85',
    address_id: '01jqpgbc3p9dttxzezq9bh0swk',
    coupon_id: '01jp68fxanxezf7x38tw76h9j2',
    totals: {
        original: 442.03,
        discount: 0,
        taxes: 384.37391304347824,
        products: 1,
        items: 1,
        subtotal: 442.03,
        coupon: 110.51,
        shipping: 0,
        total: 332,
    },
    address: {
        id: '01jqpgbc3p9dttxzezq9bh0swk',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        city_id: '01jqpdpgvysntt7cbhq8qh50f9',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Home',
        address: 'Some where in the far future',
        phone: '01142387045',
        government: {
            id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Beheira',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgvysntt7cbhq8qh50f9',
            government_id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Abu Hummus',
        },
    },
    coupon: {
        id: '01jp68fxanxezf7x38tw76h9j2',
        code: 'asdasd',
        name: 'cxsdfsdgfdsg',
        starts_at: '2025-03-12T00:00:00.000000Z',
        ends_at: '2025-07-01T00:00:00.000000Z',
        discount_type: 'percentage',
        value: 25,
        max_discount: null,
        used_count: 0,
        is_active: true,
    },
    items: [
        {
            id: '01jqz5ndrta1jrs9tz5nqzrdvs',
            product: {
                id: '01jqmtfev6v80kqd2jtbjx40ze',
                category_id: '01jqmtferjfe1rvebnekhdf4dg',
                brand_id: '01jqmtfes5njtn43efav3vrzra',
                title: 'Qui repellat ut eum aut.',
                description:
                    'Commodi esse vel et consequatur velit at repudiandae. Adipisci id minus voluptatum officia iste. Culpa voluptas distinctio hic quasi.',
                slug: 'qui-repellat-ut-eum-aut',
                is_main: false,
                images: [
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=334',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=581',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=476',
                ],
                price: 442.03,
                sale_price: 442.03,
                is_discounted: false,
                discounted_price: 0,
                stock: 82,
                has_stock: true,
                sku: 'SKU-PYEBTJ',
                meta_title: 'Voluptatibus et aliquam veniam in at consectetur.',
                meta_description:
                    'Est expedita quas tenetur molestiae placeat laborum et.',
                meta_keywords: ['prod', 'cool', 'food'],
            },
            quantity: 1,
            totals: {
                original: 442.03,
                discount: 100,
                taxes: 384.37391304347824,
                products: 1,
                items: 1,
                subtotal: 442.03,
                coupon: 0,
                shipping: 0,
                total: 442.03,
            },
        },
        {
            id: '01jqz5ndrta1jrs9tz5nqzrdvsvf',
            product: {
                id: '01jqmtfev6v80kqd2jtbjx40ze',
                category_id: '01jqmtferjfe1rvebnekhdf4dg',
                brand_id: '01jqmtfes5njtn43efav3vrzra',
                title: 'Qui repellat ut eum aut.df gfsd gsdfg sdfg vbfdg',
                description:
                    'Commodi esse vel et consequatur velit at repudiandae. Adipisci id minus voluptatum officia iste. Culpa voluptas distinctio hic quasi.',
                slug: 'qui-repellat-ut-eum-aut',
                is_main: false,
                images: [
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=334',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=581',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=476',
                ],
                price: 442.03,
                sale_price: 442.03,
                is_discounted: false,
                discounted_price: 0,
                stock: 82,
                has_stock: true,
                sku: 'SKU-PYEBTJ',
                meta_title: 'Voluptatibus et aliquam veniam in at consectetur.',
                meta_description:
                    'Est expedita quas tenetur molestiae placeat laborum et.',
                meta_keywords: ['prod', 'cool', 'food'],
            },
            quantity: 1,
            totals: {
                original: 442.03,
                discount: 0,
                taxes: 384.37391304347824,
                products: 1,
                items: 1,
                subtotal: 442.03,
                coupon: 0,
                shipping: 0,
                total: 442.03,
            },
        },
        {
            id: '01jqz5ndrta1jrs9tz5nqzrdvsdf',
            product: {
                id: '01jqmtfev6v80kqd2jtbjx40ze',
                category_id: '01jqmtferjfe1rvebnekhdf4dg',
                brand_id: '01jqmtfes5njtn43efav3vrzra',
                title: 'Qui repellat ut eum aut.',
                description:
                    'Commodi esse vel et consequatur velit at repudiandae. Adipisci id minus voluptatum officia iste. Culpa voluptas distinctio hic quasi.',
                slug: 'qui-repellat-ut-eum-aut',
                is_main: false,
                images: [
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=334',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=581',
                    'http://api-supps.test/uploads/https://picsum.photos/400/300?random=476',
                ],
                price: 442.03,
                sale_price: 442.03,
                is_discounted: false,
                discounted_price: 0,
                stock: 82,
                has_stock: true,
                sku: 'SKU-PYEBTJ',
                meta_title: 'Voluptatibus et aliquam veniam in at consectetur.',
                meta_description:
                    'Est expedita quas tenetur molestiae placeat laborum et.',
                meta_keywords: ['prod', 'cool', 'food'],
            },
            quantity: 1,
            totals: {
                original: 442.03,
                discount: 200,
                taxes: 384.37391304347824,
                products: 1,
                items: 1,
                subtotal: 442.03,
                coupon: 0,
                shipping: 0,
                total: 442.03,
            },
        },
    ],
};

export default function CartPage() {
    const cart = useCartStore.use.cart();

    return (
        <div className='flex flex-col gap-4'>
            <HeroSection
                title={<Trans>Shopping Cart</Trans>}
                breadcrumbs={[
                    { label: <Trans>Home</Trans>, path: urls.home },
                    { label: <Trans>Cart</Trans>, path: urls.cart },
                ]}
            />

            {cart.items.length === 0 ? (
                <div className='text-center py-16'>
                    <div className='flex justify-center mb-4'>
                        <ShoppingBag className='h-16 w-16 text-muted-foreground' />
                    </div>
                    <h2 className='text-xl font-semibold mb-2'>
                        <Trans>Your cart is empty</Trans>
                    </h2>
                    <p className='text-muted-foreground mb-6'>
                        <Trans>
                            Looks like you haven't added anything to your cart
                            yet.
                        </Trans>
                    </p>
                    <Button asChild>
                        <Link to={urls.shop}>
                            <Trans>Continue Shopping</Trans>
                        </Link>
                    </Button>
                </div>
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2'>
                        <div className='flex items-center justify-end'>
                            <div className='mb-4'>
                                <ClearCartButton />
                            </div>
                        </div>

                        <div className='space-y-4'>
                            {cart.items.map((item) => (
                                <CartItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-1'>
                        <CartTotals totals={cart.totals} />

                        <div className='mt-4'>
                            <Card>
                                <CardContent className='p-4'>
                                    <div className='flex items-center gap-2'>
                                        <ShoppingBag className='h-5 w-5 text-muted-foreground' />
                                        <span className='text-sm'>
                                            <Trans>
                                                Need help? Contact our support
                                                team
                                            </Trans>
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
