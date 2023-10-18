import { useEffect } from "react";
import { IFooter } from "../../interfaces/IFooter";
import { Rodape } from "../../pages/Login/styles";
import getCurrentYear from "../../utils/getCurrentYear";
import { Container } from "./styles";

export default function Footer({ marginTop, top }: IFooter) {
  const currentYear = getCurrentYear();

  return (
    <Container marginTop={marginTop}>
      <Rodape top={top}>
        © {currentYear} - V7-WEB - Todos os direitos reservados
      </Rodape>
    </Container>
  );
}
