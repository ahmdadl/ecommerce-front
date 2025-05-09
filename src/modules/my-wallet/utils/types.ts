export type WalletEntity = {
    id: string;
    amount: number;
    balance: WalletBalanceEntity;
    transactions: WalletTransactionEntity[];
};

export type WalletBalanceEntity = {
    available: number;
    pending: number;
    total: number;
};

export type WalletTransactionEntity = {
    id: string;
    type: WalletTransactionType;
    amount: number;
    formatted_date: string;
    notes: string;
    status: WalletTransactionStatus;
    created_at: string;
};

export enum WalletTransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit',
}

export enum WalletTransactionStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    CANCELED = 'canceled',
}
