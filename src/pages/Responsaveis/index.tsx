import Actions from "../../components/Actions";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { Fragment } from "../Cadastro/styles";

export default function Responsaveis() {
  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <Button text="+ Novo Responsável" marginBottom="15px" />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="100px" />
              <Column title="Nome" width="375px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Row>1</Row>
              <Row>Vinicius Lima</Row>
              <Row
                justifyContent="space-evenly"
                display="flex"
                marginLeft="-20px"
              >
                <Actions title="Responsaveis" />
              </Row>
            </tr>
            <tr>
              <Row>2</Row>
              <Row>Daiani Lima</Row>
              <Row
                justifyContent="space-evenly"
                display="flex"
                marginLeft="-20px"
              >
                <Actions title="Responsaveis" />
              </Row>
            </tr>
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
