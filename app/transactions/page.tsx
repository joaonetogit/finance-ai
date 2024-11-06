import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/Button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/DataTable";
import { transationColumns } from "./_columns";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transationColumns} data={transactions} />
    </div>
  );
};

export default TransactionPage;
