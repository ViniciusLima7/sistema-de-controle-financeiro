import Modal from "@mui/material/Modal";
import { Box, Text } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AddCategoria from "./Add/AddCategoria";
import AddCadastro from "./Add/AddCadastro";
import AddSubCategoria from "./Add/AddSubCategoria";
import AddEconomia from "./Add/AddEconomia";
import AddResponsavel from "./Add/AddResponsavel";
import { IModal } from "../../../interfaces/IModal";

export default function ModalAdd({
  title = "registro",
  text = "Adicionar",
  marginBottom,
  width,
}: IModal) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(`/${title.toLowerCase()}`);
  };
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
            <AddCategoria onClose={handleClose} />
          ) : title === "SubCategorias" ? (
            <AddSubCategoria onClose={handleClose} />
          ) : title === "Economias" ? (
            <AddEconomia />
          ) : (
            <AddResponsavel onClose={handleClose} />
          )}
        </Box>
      </Modal>
    </>
  );
}
