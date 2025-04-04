import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { userStore } from '@/modules/core/stores/userStore';
import { parseError } from '@/modules/core/utils/parseError';
import { Trans, useLingui } from '@lingui/react/macro';
import { Link, useRouter } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { authApi } from '../utils/auth-api';
import PasswordInput from './PasswordInput';

export default function LoginForm() {
    const { t } = useLingui();
    const { history } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = z.object({
        email: z.string().email({ message: t`Please enter a valid email` }),
        password: z
            .string()
            .min(8, { message: t`Password must be at least 8 characters` }),
        rememberMe: z.boolean().default(false),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (isLoading) return;
        setIsLoading(true);

        const response = (await authApi
            .login(values)
            .catch((err) => parseError(err, form))) as AxiosResponse;
        setIsLoading(false);

        if (!response?.data) return;

        userStore.setState({ ...response.data.record, role: 'customer' });

        history.go(-1);

        toast.success(t`Logged in successfully`, {
            className: '!bg-green-500 !text-white',
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <Trans>Email</Trans>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t`name@example.com`}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <Trans>Password</Trans>
                            </FormLabel>
                            <FormControl>
                                <PasswordInput
                                    placeholder={t`Enter your password`}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex items-center justify-between'>
                    <FormField
                        control={form.control}
                        name='rememberMe'
                        render={({ field }) => (
                            <FormItem className='flex flex-row items-center space-x-2 space-y-0'>
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className='text-sm font-medium leading-none cursor-pointer'>
                                    <Trans>Remember me</Trans>
                                </FormLabel>
                            </FormItem>
                        )}
                    />
                    <Link
                        to='/forget-password'
                        className='text-sm font-medium text-primary hover:underline'
                    >
                        <Trans>Forgot password?</Trans>
                    </Link>
                </div>
                <Button type='submit' className='w-full'>
                    {isLoading && <Loader2 className='animate-spin' />}
                    <Trans>Sign in</Trans>
                </Button>
            </form>
        </Form>
    );
}
