import { pageViewsApi } from '@/modules/core/utils/page-views-api';
import { ViewableType } from '@/modules/core/utils/types';
import { tagRoute } from '@/routes/$locale/_catalog/tags/$slug';
import { useEffect } from 'react';

export default function TagPageView() {
    const { slug } = tagRoute.useParams();

    useEffect(() => {
        if (slug) {
            setTimeout(
                () =>
                    pageViewsApi.store({
                        type: ViewableType.TAG,
                        slug,
                    }),
                3000
            );
        }
    }, [slug]);

    return <></>;
}
