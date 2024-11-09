import { TransactionType } from "@prisma/client";

export const getAmountColor = (type: TransactionType) => {
  if (type === TransactionType.EXPENSE) {
    return "text-red-500";
  }
  if (type === TransactionType.DEPOSIT) {
    return "text-primary";
  }
  return "text-white";
};

export const getAmountPrefix = (type: TransactionType) => {
  if (type === TransactionType.DEPOSIT) {
    return "+";
  }
  return "-";
};
