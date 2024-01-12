import { useState } from "react";
import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { updateResponsible } from "../../../../../services/db/firestore/responsible/updateResponsible";
import { GroupButtom } from "../../styles";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";

export default function EditResponsavel({
  responsible,
  onClose,
}: { onClose: IModalCloser } & any) {
  const [name, setName] = useState<string>(responsible?.name);
  const [loading, setLoading] = useState<boolean>(false);

  function getUpdatedFields(): { name?: string } {
    const updatedFields: { name?: string } = {};

    if (responsible?.name !== name) {
      updatedFields.name = name;
    }

    return updatedFields;
  }

  async function updateData() {
    try {
      setLoading(true);
      if (responsible) {
        const updatedFields = getUpdatedFields();

        if (Object.keys(updatedFields).length > 0) {
          await updateResponsible(responsible?.id, updatedFields);
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
