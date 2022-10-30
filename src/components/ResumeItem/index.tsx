import { Container, Info, Logo, Title } from "./styles";
import deposito from "../../assets/deposito.png";
import retirada from "../../assets/retirada.png";
import saldo from "../../assets/saldo.png";

interface ResumeItemProps {
  title: string;
  price: number;
  color?: string;
}

export default function ResumeItem({ title, price, color }: ResumeItemProps) {
  return (
    <Container>
      <Logo
        src={
          title === "RECEITAS"
            ? deposito
            : title === "DESPESAS"
            ? retirada
            : saldo
        }
        alt={title}
      />
      <Title>{title}</Title>
      <Info color={color}>R$ {price}</Info>
    </Container>
  );
}
