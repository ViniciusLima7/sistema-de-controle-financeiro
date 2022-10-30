import { Botao } from "./styles";
import iconGoogle from "../../assets/google-icon.svg";

export interface ButtonProps {
  text: string;
  background?: string;
  hoverBg?: string;
  width?: string;
  height?: string;
}

export function Button({
  text = "Button",
  background = "var(--blue-600)",
  hoverBg = "var(--blue-900)",
  width = "249px",
  height = "40px",
}: ButtonProps) {
  return (
    <Botao
      background={background}
      hoverBg={hoverBg}
      width={width}
      height={height}
    >
      {text === "Entrar com Google" || text === "Continuar com o Google" ? (
        <img src={iconGoogle}></img>
      ) : (
        ""
      )}
      <p>{text}</p>
    </Botao>
  );
}
