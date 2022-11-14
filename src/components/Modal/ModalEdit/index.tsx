import ButtonMui from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Pencil } from "phosphor-react";
import { Box, GroupButtom, Text } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import EditCategoria from "./Edit/EditCategoria";
import EditCadastro from "./Edit/EditCadastro";
import EditSubCategoria from "./Edit/EditSubCategoria";
import EditEconomia from "./Edit/EditEconomia";
import EditResponsavel from "./Edit/EditResponsavel";

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
        <NavLink title="Editar" to={`../${title.toLowerCase()}/edit`}>
          <Pencil size={24} color="var(--black)"></Pencil>
        </NavLink>
      </ButtonMui>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Text>Editar {title}</Text>

          {title === "Cadastro" ? (
            <EditCadastro />
          ) : title === "Categorias" ? (
            <EditCategoria />
          ) : title === "SubCategorias" ? (
            <EditSubCategoria />
          ) : title === "Economias" ? (
            <EditEconomia />
          ) : (
            <EditResponsavel />
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
