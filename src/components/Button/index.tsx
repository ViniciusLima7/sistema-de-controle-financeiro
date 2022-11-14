import { Botao, Text } from "./styles";
import iconGoogle from "../../assets/google-icon.svg";
import search from "../../assets/search.svg";

export interface ButtonProps {
  text: string;
  background?: string;
  hoverBg?: string;
  width?: string;
  height?: string;
  paddingLeft?: string;
  justifyContent?: string;
  marginTop?: string;
  marginBottom?: string;
  borderRadius?: string;
  onClick?: () => void;
}

export function Button({
  text = "Button",
  background = "var(--blue-600)",
  hoverBg = "var(--blue-900)",
  width = "249px",
  height = "40px",
  paddingLeft = "0",
  justifyContent = "space-evenly",
  marginTop,
  marginBottom,
  borderRadius = "10px",
  onClick,
}: ButtonProps) {
  return (
    <Botao
      background={background}
      hoverBg={hoverBg}
      width={width}
      height={height}
      justifyContent={justifyContent}
      marginTop={marginTop}
      marginBottom={marginBottom}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {text === "Entrar com Google" || text === "Continuar com o Google" ? (
        <img alt="Icone do Google" src={iconGoogle}></img>
      ) : text === "Buscar" ? (
        <img alt="Icone de Pesquisar" src={search}></img>
      ) : (
        ""
      )}
      <Text paddingLeft={paddingLeft}>{text}</Text>
    </Botao>
  );
}
