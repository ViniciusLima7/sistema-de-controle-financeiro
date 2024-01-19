import { useEffect, useState } from "react";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container, GroupButtom } from "../styles";
import { ICategory } from "../../../../../interfaces/ICategory";
import { ISubCategory } from "../../../../../interfaces/ISubCategory";
import { IResponsible } from "../../../../../interfaces/IResponsible";
import { getCategories } from "../../../../../services/db/firestore/categories/getCategories";
import { getSubCategories } from "../../../../../services/db/firestore/subcategories/getSubCategories";
import { getResponsible } from "../../../../../services/db/firestore/responsible/getResponsible";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";
import { createTransaction } from "../../../../../services/db/firestore/transactions/createTransaction";
import { Timestamp } from "firebase/firestore";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { getCurrentDate } from "../../../../../utils/getCurrentDate";

export default function AddCadastro({ onClose }: IModalCloser) {
  const [responsible, setResponsible] = useState<IResponsible[]>([]);
  const [idSelectedResponsible, setIdSelectedResponsible] =
    useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [idSelectedCategory, setIdSelectedCategory] = useState<string>("");
  const [subCategories, setSubCategories] = useState<ISubCategory[]>([]);
  const [idSelectedSubCategory, setIdSelectedSubCategory] =
    useState<string>("");
  const [date, setDate] = useState<Date>(new Date(getCurrentDate()));
  const [price, setPrice] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategories(setCategories);
    getSubCategories(setSubCategories);
    getResponsible(setResponsible);
  }, []);

  function getSubCategoriesByCategoryId(categoryId: string) {
    return subCategories.filter((subCategory) => {
      return subCategory.FK_IdCategory === categoryId;
    });
  }

  async function addTransaction() {
    try {
      setLoading(true);
      const timestampDate = Timestamp.fromDate(date);
      await createTransaction(
        idSelectedCategory,
        idSelectedSubCategory,
        idSelectedResponsible,
        timestampDate,
        price,
        title
      );
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
            <Title>Data</Title>
            <Input
              width="70%"
              type="date"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => {
                setDate(new Date(e.target.value + "T00:00:00"));
              }}
            ></Input>
          </InputLabel>

          <InputLabel>
            <Title>SubCategoria</Title>
            <Select
              width="76%"
              value={idSelectedSubCategory}
              onChange={(e) => setIdSelectedSubCategory(e.target.value)}
            >
              <Option aria-readonly>-Selecione-</Option>
              {idSelectedCategory &&
              getSubCategoriesByCategoryId(idSelectedCategory).length > 0 ? (
                getSubCategoriesByCategoryId(idSelectedCategory).map(
                  (subCategory: ISubCategory) => (
                    <Option key={subCategory.id} value={subCategory.id}>
                      {subCategory.name}
                    </Option>
                  )
                )
              ) : (
                <Option disabled>
                  Nenhuma subcategoria cadastrada para esta categoria.
                </Option>
              )}
            </Select>
          </InputLabel>

          <InputLabel>
            <Title>Preço</Title>
            <Input
              width="70%"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            ></Input>
          </InputLabel>
        </Container>

        <Container flexDirection="column" width="400px">
          <InputLabel>
            <Title>Categoria </Title>
            <Select
              width="77%"
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

          <InputLabel>
            <Title>Título</Title>
            <Input
              width="70%"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </InputLabel>

          <InputLabel>
            <Title>Responsável</Title>
            <Select
              width="76%"
              value={idSelectedResponsible}
              onChange={(e) => setIdSelectedResponsible(e.target.value)}
            >
              <Option aria-readonly>-Selecione-</Option>
              {responsible.map((responsible: IResponsible) => (
                <Option key={responsible.id} value={responsible.id}>
                  {responsible.name}
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
          <Button width="119px" text="Salvar" onClick={addTransaction}></Button>
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
