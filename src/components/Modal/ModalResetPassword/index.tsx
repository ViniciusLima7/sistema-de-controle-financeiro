import Container from "@mui/material/Modal";
import { Registration } from "../../../pages/Login/styles";
import { Box, ResetPassword, Text, Title } from "./styles";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { Envelope } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalEmailSend } from "../ModalEmailSend";

export function ModalResetPassword() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ResetPassword onClick={handleOpen}>Esqueceu a senha?</ResetPassword>
      <Container open={open} onClose={handleClose}>
        <Box>
          <Title>Recuperação de Senha</Title>
          <Input
            icon={<Envelope size={24} />}
            type="email"
            placeholder="Digite o email cadastrado"
            marginBottom="60px"
          />
          <NavLink to="../emailsend">
            <ModalEmailSend />
          </NavLink>
          <Text>Voltar para o login</Text>
        </Box>
      </Container>
    </>
  );
}
