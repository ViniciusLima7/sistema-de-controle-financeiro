import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Envelope, Lock } from "phosphor-react";

import {
  ContainerBG,
  FormLogin,
  Line,
  Link,
  Rodape,
  SubTitle,
  Text,
  TextLine,
  Title,
} from "./styles";
import { ModalSubscribe } from "../../components/Modal/ModalSubscribe";
import { NavLink } from "react-router-dom";
import { ModalResetPassword } from "../../components/Modal/ModalResetPassword";
export function Login() {
  return (
    <ContainerBG>
      <NavLink to="../inscreva-se" style={{ textDecoration: "none" }}>
        <ModalSubscribe />
      </NavLink>
      <Title>SISTEMA DE CONTROLE FINANCEIRO</Title>
      <SubTitle>Faça login para continuar</SubTitle>
      <FormLogin>
        <Input
          placeholder="Digite seu email"
          type="email"
          icon={<Envelope size={24} />}
          width="364px"
          height="66px"
          widthLabel="400px"
          heightLabel="72px"
          marginBottom="10px"
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          icon={<Lock size={24} />}
          width="364px"
          height="66px"
          widthLabel="400px"
          heightLabel="72px"
          marginBottom="10px"
        ></Input>
        <NavLink to="../resetpassword" style={{ textDecoration: "none" }}>
          <ModalResetPassword />
        </NavLink>
        <NavLink to="../inicio" style={{ textDecoration: "none" }}>
          <Button text="Entrar"></Button>
        </NavLink>
        <Line color="var(--white-100)">
          <TextLine color="var(--white-100);">ou</TextLine>
        </Line>
        <Button
          background="var(--red-500)"
          hoverBg="var(--red-800)"
          text="Entrar com Google"
        ></Button>
      </FormLogin>
      <footer>
        <Link
          href="https://www.linkedin.com/in/marcos-vinicius-lima/"
          target="_blank"
        >
          <Rodape>© 2022 - V7-WEB - Todos os direitos reservados</Rodape>
        </Link>
      </footer>
    </ContainerBG>
  );
}
