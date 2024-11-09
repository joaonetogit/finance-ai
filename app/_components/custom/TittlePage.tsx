interface TitlePageProps {
  children: React.ReactNode;
}

export const TitlePage = ({ children }: TitlePageProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
