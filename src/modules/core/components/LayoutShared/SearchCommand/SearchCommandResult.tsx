import { Badge } from '@/components/ui/badge';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { urls } from '@/modules/core/utils/urls';
import { parsePrice } from '@/modules/orders/utils/methods';
import { useSearchResultStore } from '@/modules/shop/stores/search-results-store';
import { Trans } from '@lingui/react/macro';
import Image from '../../Image';
import Link from '../../LocalizedLink';

export default function SearchCommandResult() {
    const products = useSearchResultStore.use.records();

    console.log(products);

    return (
        <>
            {!Boolean(products?.length) && (
                <div className='text-center py-1'>
                    <Trans>No results found.</Trans>
                </div>
            )}

            {Boolean(products?.length) && (
                <div className='flex flex-col gap-3 px-2 py-4 justify-evenly'>
                    {products.map((prod) => (
                        <Link
                            to={urls.products.view(prod)}
                            className='flex flex-row gap-2 items-center justify-between cursor-pointer hover:bg-accent py-1'
                            key={prod.id}
                            onClick={() =>
                                useNavbarStore.setState({
                                    isSearchOpened: false,
                                })
                            }
                        >
                            <div className='flex flex-row items-center gap-1 '>
                                <Image
                                    src={prod.images[0]}
                                    alt={prod.title}
                                    width={50}
                                    height={50}
                                    className='rounded-full'
                                />
                                <span className='font-semibold'>
                                    {prod.title}
                                </span>
                            </div>

                            <Badge>{parsePrice(prod.sale_price)}</Badge>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
