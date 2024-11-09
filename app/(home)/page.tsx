import { ContainerPage } from "../_components/custom/ContainerPage";
import { Header } from "../_components/custom/Header";
import { HeaderContentPage } from "../_components/custom/HeaderContentPage";
import { TitlePage } from "../_components/custom/TittlePage";
import { GridSummaryCards } from "./_components/GridSummaryCards";
import { TimeSelect } from "./_components/TimeSelect";

function Home() {
  return (
    <>
      <Header />
      <ContainerPage className="space-y-6">
        <HeaderContentPage>
          <TitlePage>Dashboard</TitlePage>
          <TimeSelect />
        </HeaderContentPage>

        <GridSummaryCards />
      </ContainerPage>
    </>
  );
}

export default Home;
