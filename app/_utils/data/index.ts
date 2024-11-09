import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";

export async function getAggregate(
  transactioType: TransactionType,
  whereCustom?: Record<string, unknown>,
) {
  const result = Number(
    (
      await db.transaction.aggregate({
        where: { ...whereCustom, type: transactioType },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  return result;
}
