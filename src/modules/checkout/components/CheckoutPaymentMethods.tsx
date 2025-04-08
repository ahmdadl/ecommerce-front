import { Check, CreditCard } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from '@/modules/core/components/Image';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';

const paymentMethods = [
    {
        id: 'credit-card',
        title: 'Credit Card',
        icon: <CreditCard className='h-5 w-5' />,
    },
    {
        id: 'paypal',
        title: 'PayPal',
        icon: (
            <Image
                src='/placeholder.svg?height=20&width=20'
                width={20}
                height={20}
                alt='PayPal'
            />
        ),
    },
    {
        id: 'apple-pay',
        title: 'Apple Pay',
        icon: (
            <Image
                src='/placeholder.svg?height=20&width=20'
                width={20}
                height={20}
                alt='Apple Pay'
            />
        ),
    },
];

export default function CheckoutPaymentMethods() {
    const [selectedPayment, setSelectedPayment] = useState(
        paymentMethods[0].id
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <CreditCard className='h-5 w-5' />
                    <Trans>Payment Method</Trans>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    value={selectedPayment}
                    onValueChange={setSelectedPayment}
                    className='space-y-4'
                >
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`flex items-center space-x-3 border rounded-lg p-4 ${
                                selectedPayment === method.id
                                    ? 'border-primary'
                                    : 'border-border'
                            }`}
                        >
                            <RadioGroupItem
                                value={method.id}
                                id={`payment-${method.id}`}
                            />
                            <div className='flex items-center gap-2'>
                                {method.icon}
                                <Label
                                    htmlFor={`payment-${method.id}`}
                                    className='font-medium'
                                >
                                    <Trans>{method.title}</Trans>
                                </Label>
                            </div>
                            {selectedPayment === method.id && (
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
