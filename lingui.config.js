import { defineConfig } from '@lingui/cli';

export default defineConfig({
    sourceLocale: 'en',
    locales: import.meta.process.env.VITE_SUPPORTED_LOCALES,
    catalogs: [
        {
            path: '<rootDir>/src/locales/{locale}/messages',
            include: ['src'],
        },
    ],
});
