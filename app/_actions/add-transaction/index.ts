"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

type AddTransactionParams = Omit<Prisma.TransactionCreateInput, "userId">;

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Usuário não autenticado");
  }

  await db.transaction.create({
    data: { ...params, userId },
  });

  revalidatePath("/transactions");
};
