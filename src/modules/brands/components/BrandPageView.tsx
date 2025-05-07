import { pageViewsApi } from '@/modules/core/utils/page-views-api';
import { ViewableType } from '@/modules/core/utils/types';
import { brandRoute } from '@/routes/$locale/_catalog/brands/$slug';
import { useEffect } from 'react';

export default function BrandPageView() {
    const { slug } = brandRoute.useParams();

    useEffect(() => {
        if (slug) {
            setTimeout(
                () =>
                    pageViewsApi.store({
                        type: ViewableType.BRAND,
                        slug,
                    }),
                3000
            );
        }
    }, [slug]);

    return <></>;
}
