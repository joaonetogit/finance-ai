-- CreateEnum
CREATE TYPE "TransationType" AS ENUM ('DEPOSIT', 'EXPENSE', 'INVESTMENT');

-- CreateEnum
CREATE TYPE "TransationCategory" AS ENUM ('HOUSING', 'TRANSPORTATION', 'FOOD', 'ENTERTAINMENT', 'HEALTH', 'UTILITY', 'SALARY', 'EDUCATION', 'OTHER');

-- CreateEnum
CREATE TYPE "TransationPaymentMethod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'BANK_SLIP', 'CASH', 'PIX', 'OTHER');

-- CreateTable
CREATE TABLE "Transation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TransationType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" "TransationCategory" NOT NULL,
    "paymentMethod" "TransationPaymentMethod" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transation_pkey" PRIMARY KEY ("id")
);
