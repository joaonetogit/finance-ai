import { redirect } from "next/navigation";
import { ContainerPage } from "../_components/custom/ContainerPage";
import { Header } from "../_components/custom/Header";
import { HeaderContentPage } from "../_components/custom/HeaderContentPage";
import { TitlePage } from "../_components/custom/TittlePage";
import { GridSummaryCards } from "./_components/GridSummaryCards";
import { TimeSelect } from "./_components/TimeSelect";
import { isMatch } from "date-fns";
import { TransactionPieChart } from "./_components/TransactionPieChart";
import { getDashboard } from "../_services/getDashboard";
import { ExpensesPerCategory } from "./_components/ExpensesPerCategory";
import { LastTransactions } from "./_components/LastTransactions";

interface HomeProps {
  searchParams: { month: string };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  const dashboardValues = await getDashboard({ month });

  return (
    <>
      <Header />
      <ContainerPage className="space-y-6">
        <HeaderContentPage>
          <TitlePage>Dashboard</TitlePage>
          <TimeSelect />
        </HeaderContentPage>

        <div className="grid grid-cols-[2fr,1fr] gap-6">
          <div className="space-y-6">
            <GridSummaryCards {...dashboardValues} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionPieChart {...dashboardValues} />
              <ExpensesPerCategory
                expensesPerCategory={dashboardValues.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions
            lastTransactions={dashboardValues.lastTransactions}
          />
        </div>
      </ContainerPage>
    </>
  );
};

export default Home;
