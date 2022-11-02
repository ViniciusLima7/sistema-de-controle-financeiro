import { Container, Info, Logo, Title } from "./styles";
import deposito from "../../assets/deposito.png";
import retirada from "../../assets/retirada.png";
import saldo from "../../assets/saldo.png";
import cofrinho from "../../assets/cofrinho.svg";

interface ResumeItemProps {
  title: string;
  price?: number;
  color?: string;
  icon?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
}

export default function ResumeItem({
  title,
  price,
  color,
  icon,
  width,
  height,
  marginLeft,
}: ResumeItemProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Logo
        src={icon}
        alt={title}
        width={width}
        height={height}
        marginLeft={marginLeft}
      />
      {price != undefined ? <Info color={color}>R$ {price}</Info> : ""}
    </Container>
  );
}
