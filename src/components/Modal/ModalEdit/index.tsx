import ButtonMui from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Pencil, Trash } from "phosphor-react";
import { Box, Container, GroupButtom, Text } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../InputArea/styles";

interface ModalEditProps {
  title?: string;
}
export default function ModalEdit({ title = "registro" }: ModalEditProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonMui onClick={handleOpen}>
        <NavLink to={`../${title.toLowerCase()}/edit`}>
          <Pencil size={24} color="var(--black)"></Pencil>
        </NavLink>
      </ButtonMui>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Text>Editar {title}</Text>

          <Container width="450px">
            <Container flexDirection="column" width="400px" paddingLeft="20px">
              <InputLabel>
                <Title>Data</Title>
                <Input width="70%" type="date"></Input>
              </InputLabel>

              <InputLabel>
                <Title>SubCategoria</Title>
                <Select width="76%">
                  <Option>-Selecione-</Option>
                </Select>
              </InputLabel>

              <InputLabel>
                <Title>Preço</Title>
                <Input width="70%" placeholder="Preço"></Input>
              </InputLabel>
            </Container>

            <Container flexDirection="column" width="400px">
              <InputLabel>
                <Title>Categoria </Title>
                <Select width="77%">
                  <Option>-Selecione-</Option>
                </Select>
              </InputLabel>

              <InputLabel>
                <Title>Título</Title>
                <Input width="70%" placeholder="Título"></Input>
              </InputLabel>

              <InputLabel>
                <Title>Responsável</Title>
                <Select width="76%">
                  <Option>-Selecione-</Option>
                </Select>
              </InputLabel>
            </Container>
          </Container>
          <GroupButtom width="280px">
            <Button width="119px" text="Salvar"></Button>
            <Button
              width="119px"
              text="Cancelar"
              background="var(--red-500)"
              hoverBg="var(--red-800)"
              marginBottom="30px"
            ></Button>
          </GroupButtom>
        </Box>
      </Modal>
    </>
  );
}
