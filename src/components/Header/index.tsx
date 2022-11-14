import { Box, Container, Image, Section, Text, Title } from "./styles";
import money from "../../assets/money.svg";
import profile from "../../assets/profile.svg";
import settings from "../../assets/settings.svg";
import notification from "../../assets/notification.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  let activeStyle = {
    color: "var(--red-500)",
    textDecoration: "none",
  };

  let style = {
    textDecoration: "none",
    color: "var(--white-100)",
  };

  return (
    <Container>
      <Section>
        <Title>SISTEMA DE CONTROLE FINANCEIRO</Title>
        <Image src={money}></Image>
      </Section>
      <Section>
        <Text>
          <NavLink
            to="../inicio"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            HOME
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../cadastro"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            CADASTRO
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../dashboard"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            DASHBOARD
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../categorias"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            CATEGORIAS
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../subcategorias"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            SUBCATEGORIAS
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../economias"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            ECONOMIAS
          </NavLink>
        </Text>
        <Text>
          <NavLink
            to="../responsaveis"
            style={({ isActive }) => (isActive ? activeStyle : style)}
          >
            RESPONSÁVEIS
          </NavLink>
        </Text>
      </Section>
      <Box>
        <Image title="Perfil" src={profile}></Image>
        <Image title="Configurações" src={settings}></Image>
        <Image title="Notificações" src={notification}></Image>
      </Box>
    </Container>
  );
}
