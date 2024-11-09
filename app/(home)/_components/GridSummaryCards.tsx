import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./SummaryCard";
import { getTransactionSummary } from "@/app/_services/transactionSummary";

export const GridSummaryCards = async () => {
  const SIZE_ICON_LARGE = 18;
  const SIZE_ICON_SMALL = 14;

  const { balanceTotal, depositsTotal, expensesTotal, investmentsTotal } =
    await getTransactionSummary();

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={SIZE_ICON_LARGE} />}
        title="Saldo"
        amount={balanceTotal}
        size="large"
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={SIZE_ICON_SMALL} />}
          title="Investido"
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={
            <TrendingUpIcon size={SIZE_ICON_SMALL} className="text-primary" />
          }
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={
            <TrendingDownIcon size={SIZE_ICON_SMALL} className="text-red-500" />
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};
