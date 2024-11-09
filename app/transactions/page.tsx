import { DataTable } from "../_components/ui/DataTable";
import { AddTransactionButton } from "../_components/custom/AddTransactionButton";
import { Header } from "../_components/custom/Header";
import { HeaderContentPage } from "../_components/custom/HeaderContentPage";
import { TitlePage } from "../_components/custom/TittlePage";

import { getTransactionsPage } from "../_services/transactionsPage";

import { transationColumns } from "./_columns";
import { ScrollArea } from "../_components/ui/ScrollArea";

const TransactionPage = async () => {
  const { transactions } = await getTransactionsPage();

  return (
    <>
      <Header />
      <div className="space-y-6 overflow-hidden p-6">
        <HeaderContentPage>
          <TitlePage>Transactions</TitlePage>
          <AddTransactionButton />
        </HeaderContentPage>
        <ScrollArea>
          <DataTable
            columns={transationColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionPage;
