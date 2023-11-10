import ButtonMui from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Pencil } from "phosphor-react";
import { Box, Text } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import EditCategoria from "./Edit/EditCategoria";
import EditCadastro from "./Edit/EditCadastro";
import EditSubCategoria from "./Edit/EditSubCategoria";
import EditEconomia from "./Edit/EditEconomia";
import EditResponsavel from "./Edit/EditResponsavel";
import { IModal } from "../../../interfaces/IModal";

export default function ModalEdit({ title = "registro", data }: IModal) {
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
            <EditCategoria category={data} />
          ) : title === "SubCategorias" ? (
            <EditSubCategoria />
          ) : title === "Economias" ? (
            <EditEconomia />
          ) : (
            <EditResponsavel />
          )}
        </Box>
      </Modal>
    </>
  );
}
