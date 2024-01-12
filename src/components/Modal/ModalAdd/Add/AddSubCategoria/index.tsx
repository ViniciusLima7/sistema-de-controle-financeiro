import { useEffect, useState } from "react";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";
import { ICategory } from "../../../../../interfaces/ICategory";
import { getCategories } from "../../../../../services/db/firestore/categories/getCategories";
import { GroupButtom } from "../styles";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { createSubCategory } from "../../../../../services/db/firestore/subcategories/createSubCategory";

export default function AddSubCategoria({ onClose }: IModalCloser) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [idSelectedCategory, setIdSelectedCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function addSubCategory() {
    try {
      setLoading(true);
      await createSubCategory(name, idSelectedCategory);
      onClose();
      setLoading(false);
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories(setCategories);
  }, []);

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
            <Title>Categoria </Title>
            <Select
              value={idSelectedCategory}
              onChange={(e) => setIdSelectedCategory(e.target.value)}
            >
              <Option aria-readonly>-Selecione-</Option>
              {categories.map((category: ICategory) => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </InputLabel>
        </Container>
      </Container>
      <GroupButtom width="280px">
        {loading ? (
          <ReactLoading type="spokes" color="var(--blue-600)" />
        ) : (
          <Button width="119px" text="Salvar" onClick={addSubCategory}></Button>
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
