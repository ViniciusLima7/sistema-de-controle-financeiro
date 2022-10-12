import { Botao } from "./styles";
import iconGoogle from "../../assets/google-icon.svg";

export interface ButtonProps {
  text: string;
  background?: string;
  hoverBg?: string;
}

export function Button({ text, background, hoverBg }: ButtonProps) {
  return (
    <Botao background={background} hoverBg={hoverBg}>
      {text === "Entrar com Google" ? <img src={iconGoogle}></img> : ""}
      <p>{text}</p>
    </Botao>
  );
}
