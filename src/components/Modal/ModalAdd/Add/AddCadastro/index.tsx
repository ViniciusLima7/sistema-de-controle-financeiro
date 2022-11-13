import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../../../InputArea/styles";
import { Container } from "../styles";

export default function AddCadastro() {
  return (
    <Container width="450px">
      <Container flexDirection="column" width="400px" paddingLeft="20px">
        <InputLabel>
          <Title>Data</Title>
          <Input width="70%" type="date"></Input>
        </InputLabel>

        <InputLabel>
          <Title>SubCategoria</Title>
          <Select width="76%">
            <Option>-Selecione-</Option>
          </Select>
        </InputLabel>

        <InputLabel>
          <Title>Preço</Title>
          <Input width="70%" placeholder="Preço"></Input>
        </InputLabel>
      </Container>

      <Container flexDirection="column" width="400px">
        <InputLabel>
          <Title>Categoria </Title>
          <Select width="77%">
            <Option>-Selecione-</Option>
          </Select>
        </InputLabel>

        <InputLabel>
          <Title>Título</Title>
          <Input width="70%" placeholder="Título"></Input>
        </InputLabel>

        <InputLabel>
          <Title>Responsável</Title>
          <Select width="76%">
            <Option>-Selecione-</Option>
          </Select>
        </InputLabel>
      </Container>
    </Container>
  );
}
