import { db } from "../_lib/prisma";

export interface TransactionSummary {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  balanceTotal: number;
}

export async function getTransactionSummary(): Promise<TransactionSummary> {
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const balanceTotal = depositsTotal - expensesTotal - investmentsTotal;

  return {
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    balanceTotal,
  };
}
