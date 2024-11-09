import { cn } from "@/app/_lib/utils";

interface ContainerPageProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerPage = ({ children, className }: ContainerPageProps) => {
  return <div className={cn("container p-6", className)}>{children}</div>;
};
