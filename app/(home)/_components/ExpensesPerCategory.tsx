import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/Card";
import { Progress } from "@/app/_components/ui/Progress";
import { ScrollArea } from "@/app/_components/ui/ScrollArea";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { percentageFormat } from "@/app/_lib/format";
import { TotalExpensePerCategory } from "@/app/_services/getDashboard/types";
import React from "react";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}
export const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border pb-6">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por categoria</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm font-bold">
                {TRANSACTION_CATEGORY_LABELS[category.category]}
              </p>
              <p className="text-sm font-bold">
                {percentageFormat(category.percentageOfTotal)}
              </p>
            </div>
            <Progress value={category.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};
