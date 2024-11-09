import { ChildrenProps } from "@/app/_types/base";

export const TitlePage = ({ children }: ChildrenProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
