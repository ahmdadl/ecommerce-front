export const env = {
    environment: import.meta.env.VITE_ENVIRONMENT,
    isDev: import.meta.env.VITE_ENVIRONMENT === 'development',
    apiUrl: import.meta.env.VITE_API_URL,
};
