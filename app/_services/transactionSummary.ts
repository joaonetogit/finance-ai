import { db } from "../_lib/prisma";

export interface TransactionSummary {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  balanceTotal: number;
}

interface GetTransactionSummaryParams {
  month: string;
}

export async function getTransactionSummary({
  month,
}: GetTransactionSummaryParams): Promise<TransactionSummary> {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
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
