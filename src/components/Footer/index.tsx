import React from "react";
import { Rodape } from "../../pages/Login/styles";
import { Container } from "./styles";

interface FooterProp {
  marginTop?: string;
  top?: string;
}

export default function Footer({ marginTop, top }: FooterProp) {
  return (
    <Container marginTop={marginTop}>
      <Rodape top={top}>© 2022 - V7-WEB - Todos os direitos reservados</Rodape>
    </Container>
  );
}
