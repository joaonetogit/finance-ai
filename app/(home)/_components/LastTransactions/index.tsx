import { Button } from "@/app/_components/ui/Button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/Card";
import { ScrollArea } from "@/app/_components/ui/ScrollArea";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { LastTransaction } from "@/app/_services/getDashboard/types";
import Image from "next/image";
import Link from "next/link";
import { getAmountColor, getAmountPrefix } from "./utils";
import { currencyFormat, dateFormat } from "@/app/_utils/format";

interface LastTransactionsProps {
  lastTransactions: LastTransaction[];
}

export const LastTransactions = ({
  lastTransactions,
}: LastTransactionsProps) => {
  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas Transações</CardTitle>
        <Button variant="outline" className="rounded-full font-bold" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white bg-opacity-[3%] p-3 text-white">
                <Image
                  src={`/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                  height={20}
                  width={20}
                  alt="Icon"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {dateFormat(transaction.date, "short")}
                </p>
              </div>
            </div>
            <p
              className={`text-sm font-bold ${getAmountColor(transaction.type)}`}
            >
              {getAmountPrefix(transaction.type)}
              {currencyFormat(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};
