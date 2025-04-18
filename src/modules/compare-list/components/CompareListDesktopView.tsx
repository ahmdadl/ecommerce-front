import { Trans } from '@lingui/react/macro';
import CompareListRenderAttribute from '../components/CompareListRenderAttribute';
import { comparisonAttributes } from '../utils/methods';
import { CompareListItemEntity } from '../utils/types';
import CompareListProduct from './CompareListProduct';

export default function CompareListDesktopView({
    comparedProducts,
}: {
    comparedProducts: CompareListItemEntity[];
}) {
    return (
        <div className='mx-auto px-4 py-8 2xl:max-w-7xl'>
            <div className='overflow-x-auto'>
                <div className='inline-block min-w-full align-middle'>
                    <div className='overflow-hidden border rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead className='bg-muted/50'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='p-4 text-left font-medium text-muted-foreground w-[200px]'
                                    >
                                        <Trans>Product</Trans>
                                    </th>
                                    {comparedProducts.map(({ id, product }) => (
                                        <th
                                            key={product.id}
                                            scope='col'
                                            className='p-4 text-center min-w-[250px]'
                                        >
                                            <CompareListProduct
                                                product={product}
                                                compareItemId={id}
                                            />
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 bg-white'>
                                {comparisonAttributes.map((attr, index) => (
                                    <tr
                                        key={attr.id}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-muted/30'
                                        }
                                    >
                                        <td className='p-4 font-medium'>
                                            {attr.label}
                                        </td>
                                        {comparedProducts.map(({ product }) => (
                                            <td
                                                key={`${product.id}-${attr.id}`}
                                                className='p-4'
                                            >
                                                <CompareListRenderAttribute
                                                    product={product}
                                                    attributeId={attr.id}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
