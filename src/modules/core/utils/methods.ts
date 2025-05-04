import { BrandEntity } from '@/modules/brands/utils/types';
import { CategoryEntity } from '@/modules/categories/utils/types';
import { ProductEntity } from '@/modules/shop/utils/types';
import { TagEntity } from '@/modules/tags/utils/types';
import { i18n } from '@lingui/core';
import { toast } from 'sonner';
import { localeStore } from '../stores/localeStore';
import { cachedData } from './cached-data';
import { env } from './env';

interface LoadingToastOptions {
    loadingMessage?: string;
    successMessage?: string | ((data: any) => string);
    errorMessage?: string;
    toastOptions?: any;
    onFinally?: () => void | Promise<void>;
    onSuccess?: () => void | Promise<void>;
}

export default async function loadingToast<T>(
    promise: Promise<T> | (() => Promise<T>),
    options: LoadingToastOptions = {}
) {
    const {
        loadingMessage = i18n._('Please Wait...'),
        successMessage = i18n._('Done'),
        errorMessage = i18n._('Something went wrong'),
        onFinally = () => {},
        toastOptions = {},
    } = options;

    return toast.promise<T>(promise, {
        loading: loadingMessage,
        success: (data) => {
            options.onSuccess?.();

            return typeof successMessage === 'function'
                ? successMessage(data)
                : successMessage;
        },
        error: errorMessage,
        finally: async () => {
            await Promise.resolve(onFinally());
        },
        ...toastOptions,
    });
}

export function getDefaultGuestToken() {
    const tokens = env.apiDefaultGuestTokens.split(',');

    const randomIndex = Math.floor(Math.random() * tokens.length);

    return tokens[randomIndex];
}

export function isValidResponse(response: any) {
    return typeof response === 'object' && typeof response?.data === 'object';
}

export function getCurrentLocaleKey() {
    return localeStore.getState().localeKey();
}

export function valueOr(value: any, defaultValue: any) {
    if (typeof value === 'undefined') return valueOr(defaultValue, '');

    if (value === null) return valueOr(defaultValue, '');

    if (value === '') return valueOr(defaultValue, '');

    return String(value);
}

export function getCatalogMetaData(
    record: ProductEntity | CategoryEntity | BrandEntity | TagEntity
) {
    let meta: any[] = [];
    let links: any[] = [];

    if (!record) return {};

    meta = [
        {
            name: 'description',
            content: valueOr(
                record?.meta_description,
                record?.description || ''
            ),
        },
        {
            title: valueOr(record?.meta_title, record?.title),
        },
        {
            name: 'keywords',
            content:
                (Array.isArray(record?.meta_keywords) &&
                    record?.meta_keywords?.join(', ')) ||
                '',
        },
    ];

    // @ts-ignore
    if (typeof record?.meta_image === 'string') {
        links = [
            {
                rel: 'icon',
                // @ts-ignore
                href: record?.meta_image,
            },
        ];
    }

    return {
        meta,
        links,
    };
}

export function getPageMetaData(pageUrl: string) {
    const pageMetas = cachedData.pageMetas;

    const record = pageMetas?.find((meta) => meta.page_url === pageUrl);

    if (!record) return {};

    let meta: any[] = [];
    let links: any[] = [];

    meta = [
        {
            name: 'description',
            content: record.description[getCurrentLocaleKey()],
        },
        {
            title: record.title[getCurrentLocaleKey()],
        },
        {
            name: 'keywords',
            content:
                (Array.isArray(record?.keywords) &&
                    record?.keywords?.join(', ')) ||
                '',
        },
    ];

    if (typeof record?.image === 'string') {
        links = [
            {
                rel: 'icon',
                href: record?.image,
            },
        ];
    }

    return {
        meta,
        links,
    };
}

export function localizeUrl(url: string) {
    return '/' + getCurrentLocaleKey() + url;
}
