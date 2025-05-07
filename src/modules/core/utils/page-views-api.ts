import http from './http';
import { ViewableType } from './types';

export const pageViewsApi = {
    store: ({ type, slug }: { type: ViewableType; slug: string }) => {
        http.post<void>(`/page-views/`, {
            type,
            slug,
            user_agent: navigator.userAgent,
        });
    },
};
