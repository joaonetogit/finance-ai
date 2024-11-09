"use client";

import { useState } from "react";
import { ArrowDownUpIcon } from "lucide-react";

import { Button } from "../ui/Button";

import { UpsertTransactionDialog } from "./UpsertTransactionDialog";

export const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};
