import React from "react";
import { Box, Container, Image, Section, Text, Title } from "./styles";
import money from "../../assets/money.svg";
import profile from "../../assets/profile.svg";
import settings from "../../assets/settings.svg";
import notification from "../../assets/notification.svg";

export default function Header() {
  return (
    <Container>
      <Section>
        <Title>SISTEMA DE CONTROLE FINANCEIRO</Title>
        <Image src={money}></Image>
      </Section>
      <Section>
        <Text>HOME</Text>
        <Text>CADASTRO</Text>
        <Text>DASHBOARD</Text>
        <Text>CATEGORIAS</Text>
        <Text>SUBCATEGORIAS</Text>
        <Text>ECONOMIAS</Text>
        <Text>RESPONSÁVEIS</Text>
      </Section>
      <Box>
        <Image src={profile}></Image>
        <Image src={settings}></Image>
        <Image src={notification}></Image>
      </Box>
    </Container>
  );
}
