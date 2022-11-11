import ResumeItem from "../ResumeItem";
import { MonthArea, MonthArrow, MonthTitle, ResumeArea } from "./styles";

import deposito from "../../assets/deposito.png";
import retirada from "../../assets/retirada.png";
import saldo from "../../assets/saldo.png";
import cofrinho from "../../assets/cofrinho.svg";
import Section from "../Section";

interface InfoProps {
  currentMonth?: string;
  onMonthChange?: (newMonth: string) => void;
  receita?: number;
  despesa?: number;
}

export default function InfoArea({
  currentMonth,
  onMonthChange,
  receita = 0,
  despesa = 0,
}: InfoProps) {
  return (
    <Section>
      <MonthArea>
        <MonthArrow>⬅️</MonthArrow>
        <MonthTitle>Novembro de 2022</MonthTitle>
        <MonthArrow>➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem
          marginLeft="34%"
          icon={deposito}
          title="RECEITAS"
          price={0}
        />
        <ResumeItem
          marginLeft="34%"
          icon={retirada}
          title="DESPESAS"
          price={0}
        />
        <ResumeItem
          marginLeft="34%"
          icon={saldo}
          title="BALANÇO"
          price={10}
          color={receita - despesa < 0 ? "#E50914" : "#00E520"}
        />
        <ResumeItem
          icon={cofrinho}
          width="110px"
          height="110px"
          marginLeft="21%"
          title="META DE ECONOMIA"
          color={receita - despesa < 0 ? "#E50914" : "#00E520"}
        />
      </ResumeArea>
    </Section>
  );
}
