import { Loader2, Minus, Plus, Trash2 } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CartItemQuantityProps {
    initialQuantity?: number;
    min?: number;
    max?: number;
    onChange?: (quantity: number) => void;
    onRemove?: () => void;
    disabled?: boolean;
}

export default function CartItemQuantity({
    initialQuantity = 1,
    min = 1,
    max = 99,
    onChange,
    onRemove,
    disabled = false,
}: CartItemQuantityProps) {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [loading, setLoading] = useState<
        '' | 'increment' | 'decrement' | 'remove'
    >('');

    const increment = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity);

            setLoading('increment');

            setTimeout(() => {
                setLoading('');
            }, 1000);
        }
    };

    const decrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity);

            setLoading('decrement');

            setTimeout(() => {
                setLoading('');
            }, 1000);
        }
    };

    const handleRemove = () => {
        setLoading('remove');

        setTimeout(() => {
            setLoading('');
            onRemove?.();
        }, 1000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value);
        if (!isNaN(value)) {
            const newQuantity = Math.max(min, Math.min(max, value));
            setQuantity(newQuantity);
            onChange?.(newQuantity);
        }
    };

    return (
        <div className='flex items-center'>
            {quantity > min ? (
                <Button
                    variant='outline'
                    size='icon'
                    className='h-8 w-8 rounded-r-none'
                    onClick={decrement}
                    disabled={disabled}
                    aria-label='Decrease quantity'
                >
                    {loading === 'decrement' ? (
                        <Loader2 className='h-3 w-3 animate-spin' />
                    ) : (
                        <Minus className='h-3 w-3' />
                    )}
                </Button>
            ) : (
                <Button
                    variant='outline'
                    size='icon'
                    className='h-8 w-8 rounded-r-none'
                    onClick={handleRemove}
                    disabled={disabled}
                    aria-label='Remove item'
                >
                    {loading === 'remove' ? (
                        <Loader2 className='h-3 w-3 animate-spin' />
                    ) : (
                        <Trash2 className='h-3 w-3 text-red-600' />
                    )}
                </Button>
            )}
            <Input
                type='number'
                min={min}
                max={max}
                className='h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                value={quantity}
                onChange={handleInputChange}
                disabled={disabled}
                aria-label='Quantity'
            />
            <Button
                variant='outline'
                size='icon'
                className='h-8 w-8 rounded-l-none'
                onClick={increment}
                disabled={disabled || quantity >= max}
                aria-label='Increase quantity'
            >
                {loading === 'increment' ? (
                    <Loader2 className='h-3 w-3 animate-spin' />
                ) : (
                    <Plus className='h-3 w-3' />
                )}
            </Button>
        </div>
    );
}
