import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import { Trans } from '@lingui/react/macro';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { comparisonAttributes } from '../utils/methods';
import { CompareListItemEntity } from '../utils/types';
import CompareListProduct from './CompareListProduct';
import CompareListRenderAttribute from './CompareListRenderAttribute';

export default function CompareListMobileView({
    comparedProducts,
}: {
    comparedProducts: CompareListItemEntity[];
}) {
    const [activeProductIndex, setActiveProductIndex] = useState(0);

    // Navigate between products in mobile view
    const navigateProducts = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setActiveProductIndex((prev) =>
                prev < comparedProducts.length - 1 ? prev + 1 : prev
            );
        } else {
            setActiveProductIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
    };

    const item = comparedProducts[activeProductIndex];

    if (!item) {
        return null;
    }

    const { id, product: activeProduct } = item;

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-2xl font-bold mb-6'>
                <Trans>Product Comparison</Trans>
            </h1>

            <div className='flex items-center justify-between mb-4'>
                <Button
                    variant='outline'
                    size='icon'
                    onClick={() => navigateProducts('prev')}
                    disabled={activeProductIndex === 0}
                >
                    <ArrowLeft className='h-4 w-4' />
                </Button>
                <span className='text-sm'>
                    <Trans>
                        Product {activeProductIndex + 1} of{' '}
                        {comparedProducts.length}
                    </Trans>
                </span>
                <Button
                    variant='outline'
                    size='icon'
                    onClick={() => navigateProducts('next')}
                    disabled={
                        activeProductIndex === comparedProducts.length - 1
                    }
                >
                    <ArrowRight className='h-4 w-4' />
                </Button>
            </div>

            <Card className='mb-6'>
                <CardHeader className='relative pb-0'>
                    <CompareListProduct
                        product={activeProduct}
                        compareItemId={id}
                    />
                </CardHeader>
                <CardContent className='pt-4'>
                    <Table>
                        <tbody>
                            {comparisonAttributes.map((attr) => (
                                <tr>
                                    <td className='py-2'>
                                        <h4 className='font-medium text-start'>
                                            {attr.label}
                                        </h4>
                                    </td>
                                    <td>
                                        <CompareListRenderAttribute
                                            product={activeProduct}
                                            attributeId={attr.id}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
