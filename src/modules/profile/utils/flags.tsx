import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { Heart, List, Lock, MapPin, ShoppingBag, User } from 'lucide-react';
import { UserGender } from './types';

export const profileNavLinks = [
    {
        name: <Trans>Profile</Trans>,
        path: urls.profile.index,
        icon: <User className='size-4' />,
        route: '/$locale/profile/',
    },
    {
        name: <Trans>Change Password</Trans>,
        path: urls.profile.changePassword,
        icon: <Lock className='size-4' />,
        route: '/$locale/profile/change-password',
    },
    {
        name: <Trans>Addresses</Trans>,
        path: urls.profile.addresses,
        icon: <MapPin className='size-4' />,
        route: '/$locale/profile/addresses',
    },
    {
        name: <Trans>Wishlist</Trans>,
        path: urls.profile.wishlist,
        icon: <Heart className='size-4' />,
        route: '/$locale/profile/wishlist',
    },
    {
        name: <Trans>Orders</Trans>,
        path: urls.profile.orders.index,
        icon: <ShoppingBag className='size-4' />,
        route: '/$locale/profile/orders/',
    },
    {
        name: <Trans>Orders</Trans>,
        path: urls.profile.orders.index,
        icon: <ShoppingBag className='size-4' />,
        route: '/$locale/profile/orders/$id',
        hidden: true,
    },
];

export const userGenders = Object.values(UserGender);

export const userMenuLinks = [
    {
        url: urls.profile.index,
        label: <Trans>Profile</Trans>,
        icon: <User className='size-4 me-2' />,
    },
    {
        url: urls.profile.changePassword,
        label: <Trans>Change Password</Trans>,
        icon: <Lock className='size-4 me-2' />,
    },
    {
        url: urls.profile.orders.index,
        label: <Trans>Orders</Trans>,
        icon: <ShoppingBag className='size-4 me-2' />,
    },
    {
        url: urls.profile.addresses,
        label: <Trans>Addresses</Trans>,
        icon: <MapPin className='size-4 me-2' />,
    },
    {
        url: urls.profile.wishlist,
        label: <Trans>Wishlist</Trans>,
        icon: <Heart className='size-4 me-2' />,
    },
    {
        url: urls.compareList,
        label: <Trans>Compare</Trans>,
        icon: <List className='size-4 me-2' />,
    },
];
