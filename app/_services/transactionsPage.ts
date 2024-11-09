import { auth } from "@clerk/nextjs/server";
import { db } from "../_lib/prisma";
import { Transaction } from "@prisma/client";

export interface TransactionsPage {
  transactions: Transaction[];
}

export async function getTransactionsPage(): Promise<TransactionsPage> {
  const { userId } = await auth();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId!,
    },
  });

  return {
    transactions,
  };
}
