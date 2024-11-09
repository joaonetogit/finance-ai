import { ChildrenProps } from "@/app/_types/base";

export const GridContent = ({ children }: ChildrenProps) => {
  return (
    <div className="grid grid-cols-[2fr,1fr]">
      <div className="space-y-6">{children}</div>
    </div>
  );
};
