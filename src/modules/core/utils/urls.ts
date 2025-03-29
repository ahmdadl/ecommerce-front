export const urls = {
    home: '/',
    auth: {
        login: '/login',
        register: '/register',
        forgetPassword: '/forget-password',
        resetPassword: '/reset-password',
    },
    shop: '/shop',
    categories: {
        index: '/categories',
        viewRoute: '/categories/:slug',
        view: (category: any) => '/categories/' + category.slug,
    },

    // add more routes here
};
