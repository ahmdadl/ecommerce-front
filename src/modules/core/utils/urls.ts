export const urls = {
    home: '/',
    auth: {
        login: '/_auth/login',
        register: '/_auth/register',
        forgetPassword: '/_auth/forget-password',
        resetPassword: '/_auth/reset-password',
    },
    shop: '/shop',
    categories: {
        index: '/categories',
        viewRoute: '/categories/:slug',
        view: (category: any) => '/categories/' + category.slug,
    },

    // add more routes here
};
