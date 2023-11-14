import { useEffect, useState } from "react";
import Actions from "../../components/Actions";
import Header from "../../components/Header";
import ModalAdd from "../../components/Modal/ModalAdd";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { Fragment } from "../Cadastro/styles";
import { ISubCategory } from "../../interfaces/ISubCategory";
import { getSubCategories } from "../../services/db/firestore/subcategories/getSubCategories";

export default function SubCategorias() {
  const [subCategories, setSubCategories] = useState<ISubCategory[] | any>([]);

  useEffect(() => {
    getSubCategories(setSubCategories);
  }, [subCategories]);
  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <ModalAdd
          title="SubCategorias"
          text="+ Nova SubCategoria"
          marginBottom="15px"
        />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="100px" />
              <Column title="Nome" width="375px" />
              <Column title="Categoria" width="300px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            {subCategories.map((subCategory: ISubCategory) => {
              return (
                <tr key={subCategory.id}>
                  <Row>{subCategory.idSubCategory}</Row>
                  <Row>{subCategory.name}</Row>
                  <Row>{subCategory.FK_IdCategory}</Row>
                  <Row
                    justifyContent="space-evenly"
                    display="flex"
                    marginLeft="-20px"
                  >
                    <Actions title="SubCategorias" />
                  </Row>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
