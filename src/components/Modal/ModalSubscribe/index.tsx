import Container from "@mui/material/Modal";
import { Registration } from "../../../pages/Login/styles";
import { Box, Subtitle, Text, Link, Title } from "./styles";
import { Input } from "../../Input";
import { Line, TextLine } from "../../../pages/Login/styles";
import { Button } from "../../Button";
import { Envelope, Lock, User } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function ModalSubscribe() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          />
          <Input
            icon={<Lock size={24} />}
            type="password"
            placeholder="Senha"
          />
          <Input
            icon={<Lock size={24} />}
            type="password"
            placeholder="Confirmar Senha"
            marginBottom="30px"
          />
          <Button text="Cadastrar" width="270px" height="44px"></Button>
          <Line color="var(--gray-200);">
            <TextLine>ou</TextLine>
          </Line>
          <Button
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
