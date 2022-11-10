import { Input, InputLabel, Title } from "../../InputArea/styles";
import { Container } from "../styles";

export default function EditSubCategoria() {
  return (
    <Container width="450px">
      <Container flexDirection="column" width="400px" paddingLeft="20px">
        <InputLabel>
          <Title>Nome</Title>
          <Input placeholder="Nome"></Input>
        </InputLabel>
      </Container>
    </Container>
  );
}
