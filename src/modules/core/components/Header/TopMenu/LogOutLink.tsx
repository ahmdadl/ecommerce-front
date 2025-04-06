import { authApi } from '@/modules/auth/utils/auth-api';
import loadingToast from '@/modules/core/utils/methods';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { useNavigate } from '@tanstack/react-router';
import { LogOut } from 'lucide-react';
import Link from '../../LocalizedLink';

export default function LogOutLink({ className }: { className?: string }) {
    const navigate = useNavigate();

    async function logout() {
        loadingToast(authApi.guest.login(), {}).finally(() =>
            navigate({ to: urls.home })
        );
    }

    return (
        <Link to={urls.auth.logout} className={className} onClick={logout}>
            <LogOut className='h-4 w-4' />
            <Trans>Logout</Trans>
        </Link>
    );
}
