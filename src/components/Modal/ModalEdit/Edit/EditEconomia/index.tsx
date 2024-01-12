import { useEffect, useState } from "react";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";
import { IModalCloser } from "../../../../../interfaces/IModalCloser";
import { IResponsible } from "../../../../../interfaces/IResponsible";
import { getResponsible } from "../../../../../services/db/firestore/responsible/getResponsible";
import { updateEconomy } from "../../../../../services/db/firestore/savings/updateEconomy";
import { GroupButtom } from "../../styles";
import ReactLoading from "react-loading";
import { Button } from "../../../../Button";
import { months } from "../../../../../utils/months";
import { IMonth } from "../../../../../interfaces/IMonth";

export default function EditEconomia({
  economy,
  onClose,
}: { onClose: IModalCloser } & any) {
  const [idSelectedResponsible, setIdSelectedResponsible] = useState<string>(
    economy?.FK_IdResponsible
  );
  const [mes, setMes] = useState<number>(economy?.mes);
  const [ano, setAno] = useState<string>(economy?.ano);
  const [metaEconomy, setMetaEconomy] = useState<number>(economy?.metaEconomy);
  const [responsible, setResponsible] = useState<IResponsible[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getResponsible(setResponsible);
  }, []);

  function getUpdatedEconomyFields(): {
    mes?: number;
    idSelectedCategory?: string;
    ano?: string;
    metaEconomy?: number;
  } {
    const updatedFields: {
      mes?: number;
      FK_IdResponsible?: string;
      ano?: string;
      metaEconomy?: number;
    } = {};

    if (economy?.mes !== mes) {
      updatedFields.mes = mes;
    }

    if (economy?.ano !== ano) {
      updatedFields.ano = ano;
    }
    if (economy?.metaEconomy !== metaEconomy) {
      updatedFields.metaEconomy = metaEconomy;
    }

    if (economy?.FK_IdResponsible !== idSelectedResponsible) {
      updatedFields.FK_IdResponsible = idSelectedResponsible;
    }

    return updatedFields;
  }

  async function updateData() {
    try {
      setLoading(true);
      if (economy) {
        const updatedFields = getUpdatedEconomyFields();

        if (Object.keys(updatedFields).length > 0) {
          await updateEconomy(economy.id, updatedFields);
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
              onChange={(e) => setMetaEconomy(e.target.value)}
            ></Input>
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
