"use client";

import { Card, CardContent } from "@/app/_components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/Chart";
import { TransactionPercentagePerType } from "@/app/_services/getDashboard/types";
import type { TransactionSummaryProps } from "@/app/_types/base";
import { TransactionType } from "@prisma/client";
import { TrendingUpIcon, TrendingDownIcon, PiggyBankIcon } from "lucide-react";

import { Pie, PieChart } from "recharts";
import { PercentageItem } from "./PercentageItem";
import { percentageFormat } from "@/app/_lib/format";

interface TransactionPieChartProps extends TransactionSummaryProps {
  typesPercentage: TransactionPercentagePerType;
}

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

export const TransactionPieChart = ({
  investmentsTotal,
  depositsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];

  return (
    <Card className="flex flex-col p-2">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
            value={percentageFormat(typesPercentage[TransactionType.DEPOSIT])}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
            value={percentageFormat(typesPercentage[TransactionType.EXPENSE])}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investido"
            value={percentageFormat(
              typesPercentage[TransactionType.INVESTMENT],
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};
