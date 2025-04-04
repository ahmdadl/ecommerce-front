import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { Heart, Lock, MapPin, ShoppingBag, User } from 'lucide-react';
import { UserGender } from './types';

export const profileNavLinks = [
    {
        name: <Trans>Profile</Trans>,
        path: urls.profile.index,
        icon: <User className='h-4 w-4' />,
        route: '/$locale/profile/',
    },
    {
        name: <Trans>Change Password</Trans>,
        path: urls.profile.changePassword,
        icon: <Lock className='h-4 w-4' />,
        route: '/$locale/profile/change-password',
    },
    {
        name: <Trans>Addresses</Trans>,
        path: urls.profile.addresses,
        icon: <MapPin className='h-4 w-4' />,
        route: '/$locale/profile/addresses',
    },
    {
        name: <Trans>Wishlist</Trans>,
        path: urls.profile.wishlist,
        icon: <Heart className='h-4 w-4' />,
        route: '/$locale/profile/wishlist',
    },
    {
        name: <Trans>Orders</Trans>,
        path: urls.profile.orders.index,
        icon: <ShoppingBag className='h-4 w-4' />,
        route: '/$locale/profile/orders/',
    },
];

export const userGenders = Object.values(UserGender);
