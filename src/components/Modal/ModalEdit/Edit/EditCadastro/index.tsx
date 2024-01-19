import { useEffect, useState } from "react";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container, GroupButtom } from "../styles";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { ICategory } from "../../../../../interfaces/ICategory";
import { getCategories } from "../../../../../services/db/firestore/categories/getCategories";
import { ISubCategory } from "../../../../../interfaces/ISubCategory";
import { IResponsible } from "../../../../../interfaces/IResponsible";
import { getSubCategories } from "../../../../../services/db/firestore/subcategories/getSubCategories";
import { getResponsible } from "../../../../../services/db/firestore/responsible/getResponsible";
import { Timestamp } from "firebase/firestore";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";
import { updateTransaction } from "../../../../../services/db/firestore/transactions/updateTransaction";

export default function EditCadastro({
  transaction,
  onClose,
}: { onClose: IModalCloser } & any) {
  const [idSelectedCategory, setIdSelectedCategory] = useState<string>(
    transaction?.FK_IdCategory
  );
  const [idSelectedSubCategory, setIdSelectedSubCategory] = useState<string>(
    transaction?.FK_IdSubCategory
  );
  const [idSelectedResponsible, setIdSelectedResponsible] = useState<string>(
    transaction?.FK_Responsible
  );
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategory[]>([]);
  const [responsible, setResponsible] = useState<IResponsible[]>([]);
  const [price, setPrice] = useState<number>(transaction?.price);
  const [title, setTitle] = useState<string>(transaction?.title);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Timestamp>(transaction?.date);

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

  const formattedDate = date
    ? new Date(date.seconds * 1000).toISOString().slice(0, 10)
    : "";

  function getUpdatedTransactionFields(): {
    idSelectedCategory?: string;
    idSelectedSubCategory?: string;
    idSelectedResponsible?: string;
    date?: Timestamp;
    price?: number;
    title?: string;
  } {
    const updatedFields: {
      FK_IdCategory?: string;
      FK_IdSubCategory?: string;
      FK_Responsible?: string;
      date?: Timestamp;
      price?: number;
      title?: string;
    } = {};

    if (transaction?.price !== price) {
      updatedFields.price = price;
    }
    if (transaction?.title !== title) {
      updatedFields.title = title;
    }
    if (transaction?.date !== date) {
      updatedFields.date = date;
    }

    if (transaction?.FK_IdCategory !== idSelectedCategory) {
      updatedFields.FK_IdCategory = idSelectedCategory;
    }

    if (transaction?.FK_IdSubCategory !== idSelectedSubCategory) {
      updatedFields.FK_IdSubCategory = idSelectedSubCategory;
    }

    if (transaction?.FK_Responsible !== idSelectedResponsible) {
      updatedFields.FK_Responsible = idSelectedResponsible;
    }

    return updatedFields;
  }

  async function updateData() {
    try {
      setLoading(true);
      if (transaction) {
        const updatedFields = getUpdatedTransactionFields();

        if (Object.keys(updatedFields).length > 0) {
          await updateTransaction(transaction.id, updatedFields);
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
            <Title>Data</Title>
            <Input
              width="70%"
              type="date"
              value={formattedDate}
              onChange={(e) => {
                setDate(Timestamp.fromDate(new Date(e.target.value)));
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
