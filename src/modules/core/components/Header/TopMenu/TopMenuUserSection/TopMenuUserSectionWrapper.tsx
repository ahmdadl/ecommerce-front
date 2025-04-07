import { authApi } from '@/modules/auth/utils/auth-api';
import { userStore } from '@/modules/core/stores/userStore';
import { useEffect } from 'react';
import TopMenuUserSection from './TopMenuUserSection';

export default function TopMenuUserSectionWrapper() {
    useEffect(() => {
        // load user or guest if no user
        const user = userStore.getState();

        if (user.access_token?.length) {
            authApi.initialData();
        } else {
            // generate a guest token and load it
            authApi.guest.login();
        }
    }, []);

    return (
        <>
            <TopMenuUserSection />
        </>
    );
}
