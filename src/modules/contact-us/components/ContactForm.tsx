import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Trans, useLingui } from '@lingui/react/macro';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    orderNumber: z.string().optional(),
    subject: z.string({
        required_error: 'Please select a subject.',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
    }),
});

export default function ContactForm() {
    const { t } = useLingui();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            orderNumber: '',
            subject: '',
            message: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(values);

        // toast.success({
        //     title: 'Message sent!',
        //     description: "We'll get back to you as soon as possible.",
        // });

        form.reset();
        setIsSubmitting(false);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Trans>Send us a message</Trans>
                </CardTitle>
                <CardDescription>
                    <Trans>
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                    </Trans>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-6'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <Trans>Name</Trans>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t`Your name`}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                                            placeholder='your.email@example.com'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='orderNumber'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <Trans>Order Number (Optional)</Trans>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t`e.g. ORD-12345`}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        <Trans>
                                            If your inquiry is about a specific
                                            order, please provide the order
                                            number.
                                        </Trans>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='subject'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <Trans>Subject</Trans>
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder={t`Select a subject`}
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='order-status'>
                                                <Trans>Order Status</Trans>
                                            </SelectItem>
                                            <SelectItem value='returns'>
                                                <Trans>Returns & Refunds</Trans>
                                            </SelectItem>
                                            <SelectItem value='product-inquiry'>
                                                <Trans>Product Inquiry</Trans>
                                            </SelectItem>
                                            <SelectItem value='shipping'>
                                                <Trans>
                                                    Shipping & Delivery
                                                </Trans>
                                            </SelectItem>
                                            <SelectItem value='technical-issue'>
                                                <Trans>Technical Issue</Trans>
                                            </SelectItem>
                                            <SelectItem value='other'>
                                                <Trans>Other</Trans>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='message'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <Trans>Message</Trans>
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder={t`Please describe your inquiry in detail...`}
                                            className='min-h-[120px]'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type='submit'
                            className='w-full'
                            disabled={isSubmitting}
                        >
                            {isSubmitting && (
                                <Loader2 className='me-2 animate-spin' />
                            )}
                            <Trans>Send Message</Trans>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
