export const urls = {
    home: '/',
    auth: {
        login: '/login',
        register: '/register',
        forgetPassword: '/forget-password',
        resetPassword: '/reset-password',
        logout: '/logout',
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
        changePassword: '/profile/change-password',
        orders: {
            index: '/profile/orders',
            view: (order: any) => '/profile/orders/' + order.id,
        },
        wishlist: '/profile/wishlist',
        addresses: '/profile/addresses',
    },
    cart: '/cart',
    checkout: '/checkout',
};
