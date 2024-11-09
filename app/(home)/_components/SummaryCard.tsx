import { AddTransactionButton } from "@/app/_components/custom/AddTransactionButton";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/Card";
import { currencyFormat } from "@/app/_lib/format";
import { cn } from "@/app/_lib/utils";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const sizeStyles = {
  small: {
    title: "text-muted-foreground",
    amount: "text-2xl",
  },
  large: {
    title: "text-white/70",
    amount: "text-4xl",
  },
};

export const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  const styles = sizeStyles[size];

  return (
    <Card
      className={size === "large" || title === "Investido" ? "bg-white/5" : ""}
    >
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p className={styles.title}>{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={cn("font-bold", styles.amount)}>
          {currencyFormat(amount)}
        </p>
        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};
