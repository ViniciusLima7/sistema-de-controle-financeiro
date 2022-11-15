import { IResumeItem } from "../../interfaces/IResumeItem";
import { Container, Info, Logo, Title } from "./styles";

export default function ResumeItem({
  title,
  price,
  color,
  icon,
  width,
  height,
  marginLeft,
}: IResumeItem) {
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
