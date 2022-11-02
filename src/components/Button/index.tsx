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
  borderRadius?: string;
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
  borderRadius = "10px",
}: ButtonProps) {
  return (
    <Botao
      background={background}
      hoverBg={hoverBg}
      width={width}
      height={height}
      justifyContent={justifyContent}
      marginTop={marginTop}
      borderRadius={borderRadius}
    >
      {text === "Entrar com Google" || text === "Continuar com o Google" ? (
        <img src={iconGoogle}></img>
      ) : text === "Buscar" ? (
        <img src={search}></img>
      ) : (
        ""
      )}
      <Text paddingLeft={paddingLeft}>{text}</Text>
    </Botao>
  );
}
