import { useEffect, useState } from "react";
import Actions from "../../components/Actions";
import Header from "../../components/Header";
import ModalAdd from "../../components/Modal/ModalAdd";
import Column from "../../components/Table/Column";
import Row from "../../components/Table/Row";
import { Container } from "../../components/Table/TableArea/styles";
import { IEconomy } from "../../interfaces/IEconomy";
import { Fragment } from "../Cadastro/styles";
import { getSavings } from "../../services/db/firestore/savings/getSavings";
import { getResponsibleNameById } from "../../services/db/firestore/responsible/getResponsible";
import { getNamesForIds } from "../../utils/getNamesForId";

export default function Economias() {
  const [savings, setSavings] = useState<IEconomy[]>([]);
  const [responsibleNames, setResponsibleNames] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    if (location.pathname === "/economias") {
      getSavings(setSavings);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (savings.length > 0) {
      getNamesForIds(
        getResponsibleNameById,
        savings,
        "FK_IdResponsible",
        setResponsibleNames
      );
    }
  }, [savings]);

  return (
    <Fragment>
      <Header />
      <Container width="700px" top="2rem">
        <ModalAdd
          title="Economias"
          text="+ Nova Meta de Economia"
          marginBottom="15px"
        />
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
            {savings.map((economy: IEconomy) => {
              const date = new Date(`${economy.ano}-${economy.mes}-01`);

              return (
                <tr key={economy.id}>
                  <Row>{economy.idEconomy}</Row>
                  <Row>
                    {responsibleNames[economy.FK_IdResponsible] ||
                      "Carregando..."}
                  </Row>
                  <Row>
                    {date
                      .toLocaleDateString("pt-BR", { month: "short" })
                      .replace(/\.$/, "")
                      .toUpperCase()}
                  </Row>
                  <Row>{economy.ano}</Row>
                  <Row>
                    R${" "}
                    {economy.metaEconomy.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </Row>
                  <Row
                    justifyContent="space-evenly"
                    display="flex"
                    marginLeft="-20px"
                  >
                    <Actions title="Economias" data={economy} />
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
