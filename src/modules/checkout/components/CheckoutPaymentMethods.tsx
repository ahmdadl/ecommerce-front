import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import Image from '@/modules/core/components/Image';
import { Trans } from '@lingui/react/macro';
import { Check, CreditCard } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CheckoutPaymentMethods() {
    const paymentMethods = useCartStore.use.paymentMethods();

    const [selectedPayment, setSelectedPayment] = useState('');

    useEffect(() => {
        setSelectedPayment(useCartStore.getState().selectedPaymentMethod || '');
    }, []);

    function selectPaymentMethod(code: string) {
        if (selectedPayment === code) return;

        useCartStore.setState({ selectedPaymentMethod: code });

        setSelectedPayment(code);
    }

    if (!paymentMethods) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <CreditCard className='h-5 w-5' />
                    <Trans>Payment Method</Trans>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup value={selectedPayment} className='space-y-4'>
                    {paymentMethods.map((method) => (
                        <div
                            key={method.code}
                            className={`flex items-center cursor-pointer space-x-3 border rounded-lg p-4 ${
                                selectedPayment === method.code
                                    ? 'border-primary'
                                    : 'border-border'
                            }`}
                            onClick={() => selectPaymentMethod(method.code)}
                        >
                            <RadioGroupItem
                                value={method.code}
                                id={`payment-${method.code}`}
                            />
                            <div className='flex items-center gap-2'>
                                <div className='max-w-24'>
                                    <Image
                                        src={method.image}
                                        alt={method.name}
                                    />
                                </div>
                                <Label
                                    htmlFor={`payment-${method.code}`}
                                    className='font-medium'
                                >
                                    <Trans>{method.name}</Trans>
                                </Label>
                            </div>
                            {selectedPayment === method.code && (
                                <div className='ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                                    <Check className='h-3 w-3' />
                                </div>
                            )}
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
