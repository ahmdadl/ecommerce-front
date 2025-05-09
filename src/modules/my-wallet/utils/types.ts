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
    date: string;
    description: string;
    status: WalletTransactionStatus;
};

export enum WalletTransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit',
}

export enum WalletTransactionStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    FAILED = 'failed',
}
