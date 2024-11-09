import { redirect } from "next/navigation";
import { ContainerPage } from "../_components/custom/ContainerPage";
import { Header } from "../_components/custom/Header";
import { HeaderContentPage } from "../_components/custom/HeaderContentPage";
import { TitlePage } from "../_components/custom/TittlePage";
import { GridSummaryCards } from "./_components/GridSummaryCards";
import { TimeSelect } from "./_components/TimeSelect";
import { isMatch } from "date-fns";

interface HomeProps {
  searchParams: { month: string };
}

function Home({ searchParams: { month } }: HomeProps) {
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  return (
    <>
      <Header />
      <ContainerPage className="space-y-6">
        <HeaderContentPage>
          <TitlePage>Dashboard</TitlePage>
          <TimeSelect />
        </HeaderContentPage>

        <div className="grid grid-cols-[2fr,1fr]">
          <GridSummaryCards month={month} />
        </div>
      </ContainerPage>
    </>
  );
}

export default Home;
