import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import { Rodape } from "../Login/styles";
import { Container, Subtitle, Title } from "./styles";

export default function Erro404() {
  return (
    <>
      <Container>
        <Title>404</Title>
        <Subtitle>Desculpe, página não encontrada ou não disponível.</Subtitle>
        <NavLink to="../" style={{ textDecoration: "none" }}>
          <Button text="Volte para o login" width="280px" height="60px" />
        </NavLink>
      </Container>
    </>
  );
}
