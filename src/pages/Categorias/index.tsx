import { useEffect, useState } from "react";
import Actions from "../../components/Actions";
import Header from "../../components/Header";
import ModalAdd from "../../components/Modal/ModalAdd";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { Fragment } from "../Cadastro/styles";
import { ICategory } from "../../interfaces/ICategory";
import { getCategories } from "../../services/db/firestore/categories/getCategories";

export default function Categorias() {
  const [categories, setCategories] = useState<ICategory[] | any>([]);

  useEffect(() => {
    if (location.pathname === "/categorias") {
      getCategories(setCategories);
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <ModalAdd
          title="Categorias"
          text="+ Nova Categoria"
          marginBottom="15px"
        />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="100px" />
              <Column title="Nome" width="375px" />
              <Column title="Cor" width="175px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            {categories.map((category: ICategory) => {
              return (
                <tr key={category.id}>
                  <Row>{category.idCategory}</Row>
                  <Row>{category.name}</Row>
                  <Row>{category.color}</Row>
                  <Row
                    justifyContent="space-evenly"
                    display="flex"
                    marginLeft="-20px"
                  >
                    <Actions title="Categorias" data={category} />
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
