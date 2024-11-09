"use client";

import { useState, useCallback } from "react";
import { PencilIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { UpsertTransactionDialog } from "./UpsertTransactionDialog";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

export const EditTransactionButton = ({
  transaction,
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleDialogIsOpen = useCallback(() => {
    setDialogIsOpen(true);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={handleDialogIsOpen}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        transactionId={transaction.id}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
      />
    </>
  );
};
