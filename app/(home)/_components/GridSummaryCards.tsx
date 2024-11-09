import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./SummaryCard";
import type { TransactionSummaryProps } from "@/app/_types/base";

export const GridSummaryCards = async ({
  balanceTotal,
  investmentsTotal,
  depositsTotal,
  expensesTotal,
}: TransactionSummaryProps) => {
  const SIZE_ICON_LARGE = 18;
  const SIZE_ICON_SMALL = 14;

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
