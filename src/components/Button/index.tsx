import { Botao, Text } from "./styles";
import iconGoogle from "../../assets/google-icon.svg";
import search from "../../assets/search.svg";
import { IButton } from "../../interfaces/IButton";

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
}: IButton) {
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
