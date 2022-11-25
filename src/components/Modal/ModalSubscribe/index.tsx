import Container from "@mui/material/Modal";
import { Registration } from "../../../pages/Login/styles";
import { Box, Subtitle, Text, Link, Title } from "./styles";
import { Input } from "../../Input";
import { Line, TextLine } from "../../../pages/Login/styles";
import { Button } from "../../Button";
import { Envelope, Lock, User } from "phosphor-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../services/firebase-config";
const provider = new GoogleAuthProvider();

export function ModalSubscribe() {
  // Controle de Login e Cadastro
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Controle da Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function loginInSuccess() {
    user ? navigate("/inicio") : "";
  }

  async function register() {
    try {
      const register = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setUser(register);
      console.log(user);
      loginInSuccess();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function registerAndSignWithGoogle() {
    try {
      const register = await signInWithPopup(auth, provider);
      setUser(register);
      console.log(register);
      loginInSuccess();
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
    <>
      <Registration onClick={handleOpen}>Cadastre-se Agora</Registration>
      <Container open={open} onClose={handleClose}>
        <Box>
          <Title>Cadastre-se</Title>
          <Subtitle>É rápido e fácil.</Subtitle>
          <Input icon={<User size={24} />} placeholder="Nome Completo" />
          <Input icon={<User size={24} />} placeholder="Nome Exibido" />
          <Input
            icon={<Envelope size={24} />}
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <Input
            icon={<Lock size={24} />}
            type="password"
            placeholder="Senha"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <Input
            icon={<Lock size={24} />}
            type="password"
            placeholder="Confirmar Senha"
            marginBottom="30px"
          />
          <Button
            onClick={register}
            text="Cadastrar"
            width="270px"
            height="44px"
          ></Button>
          <Line color="var(--gray-200);">
            <TextLine>ou</TextLine>
          </Line>
          <Button
            onClick={registerAndSignWithGoogle}
            background="var(--red-500)"
            hoverBg="var(--red-800)"
            text="Continuar com o Google"
            width="270px"
            height="44px"
          ></Button>
          <Text>
            Já Se cadastrou?{" "}
            <NavLink
              to="../"
              onClick={handleClose}
              style={{
                textDecoration: "none",
                color: "var(--blue-600) ",
                fontWeight: "600",
              }}
            >
              Entre
            </NavLink>
          </Text>
        </Box>
      </Container>
    </>
  );
}
