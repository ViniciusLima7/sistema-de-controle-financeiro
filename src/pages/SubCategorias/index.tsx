import Actions from "../../components/Actions";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";

export default function SubCategorias() {
  return (
    <>
      <Header />
      <Container width="700px" top="2rem">
        <Button text="+ Nova SubCategoria" marginBottom="15px" />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="150px" />
              <Column title="Nome" width="175px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Row>1</Row>
              <Row>Fast-Food</Row>
              <Row
                justifyContent="space-evenly"
                display="flex"
                marginLeft="-20px"
              >
                <Actions />
              </Row>
            </tr>
            <tr>
              <Row>2</Row>
              <Row>Supermercado</Row>
              <Row
                justifyContent="space-evenly"
                display="flex"
                marginLeft="-20px"
              >
                <Actions />
              </Row>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
