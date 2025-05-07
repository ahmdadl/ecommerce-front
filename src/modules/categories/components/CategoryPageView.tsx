import { pageViewsApi } from '@/modules/core/utils/page-views-api';
import { ViewableType } from '@/modules/core/utils/types';
import { categoryRoute } from '@/routes/$locale/_catalog/categories/$slug';
import { useEffect } from 'react';

export default function CategoryPageView() {
    const { slug } = categoryRoute.useParams();

    useEffect(() => {
        if (slug) {
            setTimeout(
                () =>
                    pageViewsApi.store({
                        type: ViewableType.CATEGORY,
                        slug,
                    }),
                3000
            );
        }
    }, [slug]);

    return <></>;
}
