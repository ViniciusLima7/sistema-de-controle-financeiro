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
  TextLine,
  Title,
} from "./styles";
import { ModalSubscribe } from "../../components/Modal/ModalSubscribe";
import { NavLink, useNavigate } from "react-router-dom";
import { ModalResetPassword } from "../../components/Modal/ModalResetPassword";
import { useState } from "react";
import { auth } from "../../services/firebase-config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

export function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function loginInSuccess() {
    user ? navigate("/inicio") : "";
  }

  async function login() {
    try {
      const loginData = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUser(loginData);
      console.log(user);
      loginInSuccess();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function registerAndSignWithGoogle() {
    try {
      const loginData = await signInWithPopup(auth, provider);
      setUser(loginData);
      console.log(loginData);
      loginInSuccess();
    } catch (error: any) {
      console.log(error);
    }
  }
  async function logout() {
    await signOut(auth);
  }

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
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
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
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        ></Input>
        <NavLink to="../resetpassword" style={{ textDecoration: "none" }}>
          <ModalResetPassword />
        </NavLink>
        <Button onClick={login} text="Entrar"></Button>
        <Line color="var(--white-100)">
          <TextLine color="var(--white-100);">ou</TextLine>
        </Line>
        <Button
          background="var(--red-500)"
          hoverBg="var(--red-800)"
          text="Entrar com Google"
          onClick={registerAndSignWithGoogle}
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
