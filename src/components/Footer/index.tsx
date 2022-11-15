import { IFooter } from "../../interfaces/IFooter";
import { Rodape } from "../../pages/Login/styles";
import { Container } from "./styles";

export default function Footer({ marginTop, top }: IFooter) {
  return (
    <Container marginTop={marginTop}>
      <Rodape top={top}>© 2022 - V7-WEB - Todos os direitos reservados</Rodape>
    </Container>
  );
}
