import { useEffect, useState } from "react";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";
import { IResponsible } from "../../../../../interfaces/IResponsible";
import { getResponsible } from "../../../../../services/db/firestore/responsible/getResponsible";
import { months } from "../../../../../utils/months";
import { IMonth } from "../../../../../interfaces/IMonth";
import { GroupButtom } from "../styles";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";
import { createEconomy } from "../../../../../services/db/firestore/savings/createEconomy";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";

export default function AddEconomia({ onClose }: IModalCloser) {
  const [responsible, setResponsible] = useState<IResponsible[]>([]);
  const [idSelectedResponsible, setIdSelectedResponsible] =
    useState<string>("");
  const [mes, setMes] = useState<number>(0);
  const [ano, setAno] = useState<string>("");
  const [metaEconomy, setMetaEconomy] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  async function addEconomy() {
    try {
      setLoading(true);
      await createEconomy(mes, ano, metaEconomy, idSelectedResponsible);
      onClose();
      setLoading(false);
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getResponsible(setResponsible);
  }, []);
  return (
    <>
      <Container width="450px">
        <Container flexDirection="column" width="400px" paddingLeft="20px">
          <InputLabel>
            <Title>Nome</Title>
            <Select
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

          <Container>
            <InputLabel>
              <Title>Mês</Title>
              <Select value={mes} onChange={(e) => setMes(e.target.value)}>
                <Option aria-readonly>-Selecione-</Option>
                {months.map((month: IMonth) => (
                  <Option key={month.value} value={month.value}>
                    {month.name}
                  </Option>
                ))}
              </Select>
            </InputLabel>

            <InputLabel>
              <Title>Ano</Title>
              <Input
                width="140px"
                placeholder="Ano"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
              ></Input>
            </InputLabel>
          </Container>

          <InputLabel>
            <Title>Meta</Title>
            <Input
              width="340px"
              placeholder="Meta"
              value={metaEconomy}
              onChange={(e) => setMetaEconomy(Number(e.target.value))}
            ></Input>
          </InputLabel>
        </Container>
      </Container>
      <GroupButtom width="280px">
        {loading ? (
          <ReactLoading type="spokes" color="var(--blue-600)" />
        ) : (
          <Button width="119px" text="Salvar" onClick={addEconomy}></Button>
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
