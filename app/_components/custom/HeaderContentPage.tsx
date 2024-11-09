import { ChildrenProps } from "@/app/_types/base";

export const HeaderContentPage = ({ children }: ChildrenProps) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
};
