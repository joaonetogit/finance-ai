import { TransactionType } from "@prisma/client";
import { db } from "../prisma";

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
