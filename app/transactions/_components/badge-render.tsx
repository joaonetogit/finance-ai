import { Badge } from "@/app/_components/ui/Badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionBadgeRenderProps {
  transaction: Transaction;
}
const TransactionBadgeRender = ({
  transaction,
}: TransactionBadgeRenderProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon size={10} className="mr-2 fill-primary" />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted bg-opacity-10 font-bold text-danger hover:bg-muted">
        <CircleIcon size={10} className="mr-2 fill-danger" />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-white hover:bg-muted">
      <CircleIcon size={10} className="mr-2 fill-white" />
      Investimento
    </Badge>
  );
};

export default TransactionBadgeRender;
