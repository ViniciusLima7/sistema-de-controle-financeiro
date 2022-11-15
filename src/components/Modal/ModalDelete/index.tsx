import ButtonMui from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Trash } from "phosphor-react";
import { Box, Container, Text, Title } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IModal } from "../../../interfaces/IModal";

export default function ModalDelete({ title = "registro" }: IModal) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonMui onClick={handleOpen}>
        <NavLink title="Excluir" to={`../${title.toLowerCase()}/delete`}>
          <Trash size={24} color="var(--red-500)"></Trash>
        </NavLink>
      </ButtonMui>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Title>Excluir {title}</Title>
          <Text>Tem certeza que deseja excluir esse registro?</Text>
          <Container>
            <Button width="139px" text="Sim"></Button>
            <Button
              width="139px"
              text="Não"
              background="var(--red-500)"
              hoverBg="var(--red-800)"
            ></Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
