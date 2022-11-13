import Modal from "@mui/material/Modal";
import { Box, GroupButtom, Text } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import AddCategoria from "./Add/AddCategoria";
import AddCadastro from "./Add/AddCadastro";
import AddSubCategoria from "./Add/AddSubCategoria";
import AddEconomia from "./Add/AddEconomia";
import AddResponsavel from "./Add/AddResponsavel";

interface ModalAddProps {
  title?: string;
  text?: string;
  marginBottom?: string;
  width?: string;
}
export default function ModalAdd({
  title = "registro",
  text = "Adicionar",
  marginBottom,
  width,
}: ModalAddProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavLink
        to={`../${title.toLowerCase()}/add`}
        style={{ textDecoration: "none" }}
      >
        <Button
          onClick={handleOpen}
          text={text}
          width={width}
          marginBottom={marginBottom}
        ></Button>
      </NavLink>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Text>Adicionar {title}</Text>

          {title === "Cadastro" ? (
            <AddCadastro />
          ) : title === "Categorias" ? (
            <AddCategoria />
          ) : title === "SubCategorias" ? (
            <AddSubCategoria />
          ) : title === "Economias" ? (
            <AddEconomia />
          ) : (
            <AddResponsavel />
          )}

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
