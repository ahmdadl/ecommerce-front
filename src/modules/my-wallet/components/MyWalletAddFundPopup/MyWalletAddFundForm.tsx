import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import {
    Form,
    FormControl,
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
import FileUploadInput from '@/modules/core/components/FormFileUploadInput';
import Image from '@/modules/core/components/Image';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trans, useLingui } from '@lingui/react/macro';
import { Loader2, Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { walletPopupStore } from '../../stores/wallet-popup-store';
import { walletStore } from '../../stores/wallet-store';
import { walletApi } from '../../utils/wallet-api';

export default function MyWalletAddFundForm() {
    const { t } = useLingui();
    const [isLoading, setIsLoading] = useState(false);
    const paymentMethods = walletPopupStore.getState().paymentMethods;

    console.log(paymentMethods);

    // Define Zod schema for form validation
    const formSchema = z.object({
        amount: z
            .number({ invalid_type_error: t`Amount must be a number` })
            .min(10, t`Amount must be at least 10 EGP`)
            .max(10000, t`Amount cannot exceed 10,000 EGP`),
        paymentMethod: z.string().min(1, t`Please select a payment method`),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: 0,
            paymentMethod: '',
        },
    });

    const selectedPaymentMethod = form.watch('paymentMethod');

    // Handle form submission
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        if (isLoading) return;

        const receipt = walletPopupStore.getState().receipt;

        const paymentMethod = paymentMethods.find(
            (method) => method.code === data.paymentMethod
        );

        if (paymentMethod?.require_receipt && !receipt) {
            toast.warning(t`Please upload receipt`);
            return;
        }

        setIsLoading(true);

        walletApi
            .credit(form, {
                amount: data.amount,
                payment_method: data.paymentMethod,
                receipt: receipt,
            })
            .then((data) => {
                if (data.record) {
                    walletStore.setState({
                        record: data.record,
                    });

                    walletPopupStore.setState({
                        isOpened: false,
                    });

                    return;
                }

                if (data.payment_url) {
                    window.location.href = data.payment_url;
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='grid gap-4 py-4'
                    id='my-wallet-add-fund-form'
                >
                    <FormField
                        control={form.control}
                        name='amount'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Trans>Amount</Trans>
                                </FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                                            EGP
                                        </span>
                                        <Input
                                            type='number'
                                            placeholder='0.00'
                                            className='ps-12'
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.value
                                                        ? Number(e.target.value)
                                                        : 0
                                                )
                                            }
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='paymentMethod'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Trans>Payment Method</Trans>
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Select payment method' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {paymentMethods.length > 0 ? (
                                            paymentMethods.map((method) => (
                                                <SelectItem
                                                    key={method.code}
                                                    value={method.code}
                                                >
                                                    <Image
                                                        src={method.image}
                                                        alt={method.name}
                                                        className='w-6 h-6 rounded'
                                                    />
                                                    {method.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value='none' disabled>
                                                <Trans>
                                                    No payment methods available
                                                </Trans>
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {paymentMethods.filter(
                        (method) => method.code === selectedPaymentMethod
                    )[0]?.require_receipt && (
                        <FileUploadInput
                            afterUploaded={(receipt) =>
                                walletPopupStore.setState({
                                    receipt: receipt.id,
                                })
                            }
                            className='m-0 p-0 border-0'
                            trigger={
                                <>
                                    <Button asChild>
                                        <span>
                                            <Trans>
                                                Upload proof of payment
                                            </Trans>
                                        </span>
                                    </Button>
                                </>
                            }
                        />
                    )}
                </form>
            </Form>

            <DialogFooter>
                <Button
                    variant='outline'
                    onClick={() =>
                        walletPopupStore.setState({ isOpened: false })
                    }
                    disabled={isLoading}
                >
                    <Trans>Cancel</Trans>
                </Button>
                <Button
                    type='submit'
                    disabled={isLoading}
                    form='my-wallet-add-fund-form'
                >
                    {isLoading ? (
                        <Loader2 className='animate-spin w-4 h-4' />
                    ) : (
                        <Plus className='w-4 h-4' />
                    )}
                    <Trans>Add Funds</Trans>
                </Button>
            </DialogFooter>
        </>
    );
}
