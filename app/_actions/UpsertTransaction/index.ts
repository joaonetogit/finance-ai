"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { UpsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams
  extends Omit<Prisma.TransactionCreateInput, "userId"> {
  id?: string;
}

export const UpsertTransaction = async (params: UpsertTransactionParams) => {
  UpsertTransactionSchema.parse(params);
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Usuário não autenticado");
  }

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: {
      ...params,
      userId,
    },
    create: {
      ...params,
      userId,
    },
  });

  revalidatePath("/transactions");
};
