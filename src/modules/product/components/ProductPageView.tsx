import { pageViewsApi } from '@/modules/core/utils/page-views-api';
import { ViewableType } from '@/modules/core/utils/types';
import { productRoute } from '@/routes/$locale/products/$slug';
import { useEffect } from 'react';

export default function ProductPageView() {
    const { slug } = productRoute.useParams();

    useEffect(() => {
        if (slug) {
            setTimeout(
                () =>
                    pageViewsApi.store({
                        type: ViewableType.PRODUCT,
                        slug,
                    }),
                3000
            );
        }
    }, [slug]);

    return <></>;
}
