import { useState } from "react";
import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/styles";
import { GroupButtom } from "../styles";
import { Button } from "../../../../Button";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { createCategory } from "../../../../../services/db/firestore/categories/createCategory";
import ReactLoading from "react-loading";

export default function AddCategoria({ onClose }: IModalCloser) {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function addCategory() {
    try {
      setLoading(true);
      await createCategory(name, color);
      onClose();
      setLoading(false);
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  }

  return (
    <>
      <Container width="450px">
        <Container flexDirection="column" width="400px" paddingLeft="20px">
          <InputLabel>
            <Title>Nome</Title>
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </InputLabel>

          <InputLabel>
            <Title>Cor</Title>
            <Input
              placeholder="Cor em Hexadecimal"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></Input>
          </InputLabel>
        </Container>
      </Container>
      <GroupButtom width="280px">
        {loading ? (
          <ReactLoading type="spokes" color="var(--blue-600)" />
        ) : (
          <Button width="119px" text="Salvar" onClick={addCategory}></Button>
        )}
        <Button
          width="119px"
          text="Cancelar"
          background="var(--red-500)"
          hoverBg="var(--red-800)"
          marginBottom="30px"
          onClick={onClose}
        ></Button>
      </GroupButtom>
    </>
  );
}
