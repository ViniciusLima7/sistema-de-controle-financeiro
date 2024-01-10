import { useState } from "react";
import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/styles";
import { GroupButtom } from "../styles";
import { Button } from "../../../../Button";
import { updateCategory } from "../../../../../services/db/firestore/categories/updateCategory";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import ReactLoading from "react-loading";

export default function EditCategoria({
  category,
  onClose,
}: { onClose: IModalCloser } & any) {
  const [name, setName] = useState<string>(category?.name);
  const [color, setColor] = useState<string>(category?.color);
  const [loading, setLoading] = useState<boolean>(false);

  function getUpdatedFields(): { name?: string; color?: string } {
    const updatedFields: { name?: string; color?: string } = {};

    if (category?.name !== name) {
      updatedFields.name = name;
    }

    if (category?.color !== color) {
      updatedFields.color = color;
    }

    return updatedFields;
  }

  async function updateData() {
    try {
      setLoading(true);
      if (category) {
        const updatedFields = getUpdatedFields();

        if (Object.keys(updatedFields).length > 0) {
          await updateCategory(category?.id, updatedFields);
        }
        onClose();
        setLoading(false);
      }
    } catch (error) {
      console.log("error:", error);
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
          <Button width="119px" text="Salvar" onClick={updateData}></Button>
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
