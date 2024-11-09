import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionType]: string;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}

export type LastTransaction = Omit<Transaction, "amount"> & {
  amount: number;
};
