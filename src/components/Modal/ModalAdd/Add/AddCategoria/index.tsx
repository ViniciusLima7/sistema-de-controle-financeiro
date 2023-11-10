import { useState } from "react";
import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../services/firebase-config";
import { GroupButtom } from "../styles";
import { Button } from "../../../../Button";
import { generateIDCategories } from "../../../../../services/db/firestore/categories/getCategories";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";

export default function AddCategoria({ onClose }: IModalCloser) {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const categoriesCollectionRef = collection(db, "categories");

  async function addCategory() {
    const category = await addDoc(categoriesCollectionRef, {
      name,
      color,
      idCategory: await generateIDCategories(),
    });
    onClose();
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
        <Button width="119px" text="Salvar" onClick={addCategory}></Button>
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
