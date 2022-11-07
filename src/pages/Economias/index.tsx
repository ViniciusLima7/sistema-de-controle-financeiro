import Actions from "../../components/Actions";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { Fragment } from "../Cadastro/styles";

export default function Economias() {
  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <Button text="+ Meta de Economia" marginBottom="15px" />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="100px" />
              <Column title="Nome" width="375px" />
              <Column title="Mês" width="145px" />
              <Column title="Ano" width="145px" />
              <Column title="Meta" width="240px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Row>1</Row>
              <Row>Vinicius Lima</Row>
              <Row>Out</Row>
              <Row>2022</Row>
              <Row>R$ 100,00</Row>
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
              <Row>Daiani Lima</Row>
              <Row>Out</Row>
              <Row>2022</Row>
              <Row>R$ 150,00</Row>
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
      <Footer marginTop="865px" top="110%" />
    </Fragment>
  );
}
