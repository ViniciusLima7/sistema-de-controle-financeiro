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
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { getCategories } from "../../../../../services/db/firestore/categories/getCategories";
import { GroupButtom } from "../../styles";
import { Button } from "../../../../Button";
import ReactLoading from "react-loading";
import { updateSubCategory } from "../../../../../services/db/firestore/subcategories/updateSubCategory";

export default function EditSubCategoria({
  subCategory,
  onClose,
}: { onClose: IModalCloser } & any) {
  const [idSelectedCategory, setIdSelectedCategory] = useState<string>(
    subCategory?.FK_IdCategory
  );
  const [name, setName] = useState<string>(subCategory?.name);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  function getUpdatedSubCategoryFields(): {
    name?: string;
    idSelectedCategory?: string;
  } {
    const updatedFields: { name?: string; FK_IdCategory?: string } = {};

    if (subCategory?.name !== name) {
      updatedFields.name = name;
    }

    if (subCategory?.FK_IdCategory !== idSelectedCategory) {
      updatedFields.FK_IdCategory = idSelectedCategory;
    }

    return updatedFields;
  }

  async function updateData() {
    try {
      setLoading(true);
      if (subCategory) {
        const updatedFields = getUpdatedSubCategoryFields();

        if (Object.keys(updatedFields).length > 0) {
          await updateSubCategory(subCategory.id, updatedFields);
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
