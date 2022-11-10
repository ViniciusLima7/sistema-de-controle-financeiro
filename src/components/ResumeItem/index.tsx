import { Container, Info, Logo, Title } from "./styles";

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
