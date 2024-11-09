interface HeaderContentPageProps {
  children: React.ReactNode;
}

export const HeaderContentPage = ({ children }: HeaderContentPageProps) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
};
