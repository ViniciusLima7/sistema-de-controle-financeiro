import ButtonMui from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Trash } from "phosphor-react";
import { Box, Container, Text, Title } from "./styles";
import { Button } from "../../Button";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IModal } from "../../../interfaces/IModal";
import { deleteCategory } from "../../../services/db/firestore/categories/deleteCategory";
import ReactLoading from "react-loading";

export default function ModalDelete({ title = "registro", data }: IModal) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(`/${title.toLowerCase()}`);
  };
  function deleteDataForId() {
    try {
      setLoading(true);
      if (data) {
        deleteCategory(data?.id);
        handleClose();
      }
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  }

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
            {loading ? (
              <ReactLoading type="spokes" color="var(--blue-600)" />
            ) : (
              <Button
                width="139px"
                text="Sim"
                onClick={() => deleteDataForId()}
              ></Button>
            )}
            <Button
              width="139px"
              text="Não"
              background="var(--red-500)"
              hoverBg="var(--red-800)"
              onClick={handleClose}
            ></Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
