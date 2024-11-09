export function currencyFormat(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function dateFormat(
  date: string | Date,
  monthType: "long" | "short" = "long",
) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: monthType,
    year: "numeric",
  });
}

export function percentageFormat(value: string | number) {
  return `${value}%`;
}

export function calcTotalPercentage(value: number, total: number): string {
  return ((value / total) * 100).toFixed(2);
}
