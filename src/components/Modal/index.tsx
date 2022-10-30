import * as React from "react";
import Container from "@mui/material/Modal";
import { Registration } from "../../pages/Login/styles";
import { Box, Subtitle, Text, Link, Title } from "./styles";
import { Input } from "../Input";
import { Line, TextLine } from "../../pages/Login/styles";
import { Button } from "../../components/Button";
import { Envelope, Lock, User } from "phosphor-react";

export function Modal() {
  const [open, setOpen] = React.useState(false);
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
            Já Se cadastrou? <Link>Entre</Link>
          </Text>
        </Box>
      </Container>
    </>
  );
}
