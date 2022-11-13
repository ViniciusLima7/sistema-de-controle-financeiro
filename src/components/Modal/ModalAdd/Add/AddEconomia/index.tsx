import { Input, InputLabel, Title } from "../../../../InputArea/styles";
import { Container } from "../../../ModalEdit/Edit/styles";

export default function AddEconomia() {
  return (
    <Container width="450px">
      <Container flexDirection="column" width="400px" paddingLeft="20px">
        <InputLabel>
          <Title>Nome</Title>
          <Input width="340px" placeholder="Nome"></Input>
        </InputLabel>

        <Container>
          <InputLabel>
            <Title>Mês</Title>
            <Input width="140px" placeholder="Mês"></Input>
          </InputLabel>

          <InputLabel>
            <Title>Ano</Title>
            <Input width="140px" placeholder="Ano"></Input>
          </InputLabel>
        </Container>

        <InputLabel>
          <Title>Meta</Title>
          <Input width="340px" placeholder="Meta"></Input>
        </InputLabel>
      </Container>
    </Container>
  );
}
