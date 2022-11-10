import { Button } from "../Button";
import { Container, Input, InputLabel, Title, Option, Select } from "./styles";

export default function InputArea() {
  return (
    <Container top="25rem">
      <InputLabel>
        <Title>Data</Title>
        <Input type="date"></Input>
      </InputLabel>
      <InputLabel>
        <Title>Categoria </Title>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <InputLabel>
        <Title>SubCategoria</Title>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <InputLabel>
        <Title>Título</Title>
        <Input placeholder="Título"></Input>
      </InputLabel>
      <InputLabel>
        <Title>Preço</Title>
        <Input placeholder="Preço"></Input>
      </InputLabel>
      <InputLabel>
        <Title>Responsável</Title>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <Button
        justifyContent="center"
        text="Buscar"
        width="138px"
        height="30px"
        paddingLeft="7px"
        marginTop="31px"
        borderRadius="5px"
      />
    </Container>
  );
}
