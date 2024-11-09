import { TransactionType } from "@prisma/client";
import { db } from "../../_lib/prisma";
import {
  LastTransaction,
  TotalExpensePerCategory,
  TransactionPercentagePerType,
} from "./types";
import { calcTotalPercentage } from "@/app/_utils/format";
import { getAggregate } from "@/app/_utils/data";
import { auth } from "@clerk/nextjs/server";

export interface GetDashboardReturn {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  balanceTotal: number;
  typesPercentage: TransactionPercentagePerType;
  totalExpensePerCategory: TotalExpensePerCategory[];
  lastTransactions: LastTransaction[];
}

interface GetDashboardParams {
  month: string;
}

export async function getDashboard({
  month,
}: GetDashboardParams): Promise<GetDashboardReturn> {
  const { userId } = await auth();
  const user = userId!;

  const where = {
    userId: user,
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

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount),
    percentageOfTotal: Number(
      calcTotalPercentage(Number(category._sum.amount), Number(expensesTotal)),
    ),
  }));

  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 15,
  });

  const lastTransactionsFormatted = lastTransactions.map((transaction) => ({
    ...transaction,
    amount: Number(transaction.amount),
  }));

  return {
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    balanceTotal,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions: lastTransactionsFormatted,
  };
}
