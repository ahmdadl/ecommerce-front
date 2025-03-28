import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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

const formSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' }),
    rememberMe: z.boolean().default(false),
});

export default function LoginPage() {
    const { t } = useLingui();
    const [showPassword, setShowPassword] = useState(false);

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
        <div className='flex min-h-screen items-center justify-center bg-background p-4'>
            <Card className='w-full max-w-md'>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl font-bold'>Login</CardTitle>
                    <CardDescription>
                        <Trans>
                            Enter your email and password to access your account
                        </Trans>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-4'
                        >
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
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
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className='relative'>
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    placeholder='Enter your password'
                                                    {...field}
                                                />
                                                <Button
                                                    type='button'
                                                    variant='ghost'
                                                    size='sm'
                                                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className='h-4 w-4' />
                                                    ) : (
                                                        <Eye className='h-4 w-4' />
                                                    )}
                                                    <span className='sr-only'>
                                                        {showPassword
                                                            ? t`Hide password`
                                                            : t`Show password`}
                                                    </span>
                                                </Button>
                                            </div>
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
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <FormLabel className='text-sm font-medium leading-none cursor-pointer'>
                                                Remember me
                                            </FormLabel>
                                        </FormItem>
                                    )}
                                />
                                <Link
                                    to='/forgot-password'
                                    className='text-sm font-medium text-primary hover:underline'
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button type='submit' className='w-full'>
                                Sign in
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <p className='text-sm text-muted-foreground'>
                        Don&apos;t have an account?{' '}
                        <Link
                            to='/register'
                            className='text-primary font-medium hover:underline'
                        >
                            <Trans>Sign up</Trans>
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
