import { TransactionType } from "@prisma/client";
import { db } from "../../_lib/prisma";
import { TransactionPercentagePerType } from "./types";
import { getAggregate } from "@/app/_lib/data";
import { calcTotalPercentage } from "@/app/_lib/format";

export interface GetDashboardReturn {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  balanceTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

interface GetDashboardParams {
  month: string;
}

export async function getDashboard({
  month,
}: GetDashboardParams): Promise<GetDashboardReturn> {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = await getAggregate("DEPOSIT", where);
  const investmentsTotal = await getAggregate("INVESTMENT", where);
  const expensesTotal = await getAggregate("EXPENSE", where);

  const balanceTotal = depositsTotal - expensesTotal - investmentsTotal;

  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: calcTotalPercentage(
      depositsTotal,
      transactionsTotal,
    ),
    [TransactionType.EXPENSE]: calcTotalPercentage(
      expensesTotal,
      transactionsTotal,
    ),
    [TransactionType.INVESTMENT]: calcTotalPercentage(
      investmentsTotal,
      transactionsTotal,
    ),
  };

  return {
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    balanceTotal,
    typesPercentage,
  };
}
