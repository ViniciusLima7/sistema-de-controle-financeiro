import { Botao } from "./styles";
import iconGoogle from "../../assets/google-icon.svg";

export interface ButtonProps {
  text: string;
  background?: string;
  hoverBg?: string;
}

export function Button({
  text = "Button",
  background = "var(--blue-600)",
  hoverBg = "var(--blue-900)",
}: ButtonProps) {
  return (
    <Botao background={background} hoverBg={hoverBg}>
      {text === "Entrar com Google" ? <img src={iconGoogle}></img> : ""}
      <p>{text}</p>
    </Botao>
  );
}
