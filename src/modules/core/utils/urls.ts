export const urls = {
    home: '/',
    auth: {
        login: '/login',
        register: '/register',
        forgetPassword: '/forget-password',
        resetPassword: '/reset-password',
    },
    shop: '/shop',
    products: {
        view: (product: any) => '/products/' + product.slug,
    },
    categories: {
        index: '/categories',
        view: (category: any) => '/categories/' + category.slug,
    },
    brands: {
        index: '/brands',
        view: (brand: any) => '/brands/' + brand.slug,
    },
    profile: {
        index: '/profile',
        changePassword: '/change-password',
        orders: '/orders',
        wishlist: '/wishlist',
        addresses: '/addresses',
    },
};
