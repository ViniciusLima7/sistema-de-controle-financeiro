import { useEffect, useState } from "react";
import Actions from "../../components/Actions";
import Header from "../../components/Header";
import ModalAdd from "../../components/Modal/ModalAdd";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { Fragment } from "../Cadastro/styles";
import { getResponsible } from "../../services/db/firestore/responsible/getResponsible";
import { IResponsible } from "../../interfaces/IResponsible";

export default function Responsaveis() {
  const [responsible, setResponsible] = useState<IResponsible[]>([]);

  useEffect(() => {
    if (location.pathname === "/responsaveis") {
      getResponsible(setResponsible);
    }
  }, [location.pathname]);
  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <ModalAdd
          title="Responsaveis"
          text="+ Novo Responsável"
          marginBottom="15px"
        />
        <table>
          <thead>
            <tr>
              <Column title="ID" width="100px" />
              <Column title="Nome" width="375px" />
              <Column title="Ações" width="100px" />
            </tr>
          </thead>
          <tbody>
            {responsible.map((responsible) => {
              return (
                <tr key={responsible.id}>
                  <Row>{responsible.idResponsible}</Row>
                  <Row>{responsible.name}</Row>
                  <Row
                    justifyContent="space-evenly"
                    display="flex"
                    marginLeft="-20px"
                  >
                    <Actions title="Responsaveis" data={responsible} />
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
