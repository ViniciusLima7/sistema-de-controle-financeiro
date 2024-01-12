import { useState } from "react";
import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";
import { createResponsible } from "../../../../../services/db/firestore/responsible/createResponsible";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { GroupButtom } from "../styles";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";

export default function AddResponsavel({ onClose }: IModalCloser) {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function addResponsible() {
    try {
      setLoading(true);
      await createResponsible(name);
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
        </Container>
      </Container>
      <GroupButtom width="280px">
        {loading ? (
          <ReactLoading type="spokes" color="var(--blue-600)" />
        ) : (
          <Button width="119px" text="Salvar" onClick={addResponsible}></Button>
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
