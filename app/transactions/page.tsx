import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/DataTable";
import { transationColumns } from "./_columns";
import AddTransactionButton from "../_components/custom/AddTransactionButton";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <AddTransactionButton />
      </div>
      <DataTable
        columns={transationColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
};

export default TransactionPage;
