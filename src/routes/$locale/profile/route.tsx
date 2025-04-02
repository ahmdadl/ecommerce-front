import ProfileLayout from '@/modules/profile/components/ProfileLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile')({
    component: ProfileLayout,
});
