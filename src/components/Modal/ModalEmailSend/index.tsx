import Container from "@mui/material/Modal";
import { Box, Message, Subtitle, Text, Title } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";

export function ModalEmailSend() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        text="Enviar"
        width="270px"
        height="44px"
        marginBottom="60px"
      ></Button>
      <Container open={open} onClose={handleClose}>
        <Box>
          <Title>Recuperação de Senha</Title>
          <Subtitle>Verifique seu email</Subtitle>
          <div>
            <Message>
              Se existir uma conta para <strong>example@email.com</strong> você
              receberá um e-mail com instruções sobre como redefinir sua senha.
              Se não chegar, verifique sua pasta de spam. O link possui um prazo
              de expiração, válido somente por 5 minutos.
            </Message>
          </div>
          <Text>Voltar para o login</Text>
        </Box>
      </Container>
    </>
  );
}
