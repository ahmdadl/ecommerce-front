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
import { Trans, useLingui } from '@lingui/react/macro';
import { Link } from '@tanstack/react-router';
import PasswordInput from './PasswordInput';

export default function LoginForm() {
    const { t } = useLingui();

    const formSchema = z.object({
        email: z
            .string()
            .email({ message: t`Please enter a valid email address` }),
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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Here you would typically handle authentication
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
                    <Trans>Sign in</Trans>
                </Button>
            </form>
        </Form>
    );
}
