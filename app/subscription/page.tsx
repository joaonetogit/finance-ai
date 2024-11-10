import { CheckIcon, XIcon } from "lucide-react";
import { ContainerPage } from "../_components/custom/ContainerPage";
import { Header } from "../_components/custom/Header";
import { TitlePage } from "../_components/custom/TittlePage";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/Card";
import { AcquirePlanButton } from "./_components/AcquirePlanButton";

const SubscriptionPage = () => {
  return (
    <>
      <Header />
      <ContainerPage>
        <TitlePage>Assinatura</TitlePage>
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader>
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">0</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[450px]">
            <CardHeader>
              <h2 className="text-center text-2xl font-semibold">
                Plano Premium
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">19</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
            <CardFooter>
              <AcquirePlanButton />
            </CardFooter>
          </Card>
        </div>
      </ContainerPage>
    </>
  );
};

export default SubscriptionPage;
