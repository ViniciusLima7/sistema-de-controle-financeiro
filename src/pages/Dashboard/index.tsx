import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Input,
  InputLabel,
  Option,
  Select,
  Title,
} from "../../components/InputArea/styles";
import { Fragment } from "../Cadastro/styles";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Container top="11rem">
        <InputLabel>
          <Title>De</Title>
          <Input type="date"></Input>
        </InputLabel>
        <InputLabel>
          <Title>Até</Title>
          <Input type="date"></Input>
        </InputLabel>
        <InputLabel>
          <Title>Ano</Title>
          <Input placeholder="Ano"></Input>
        </InputLabel>
        <InputLabel>
          <Title>Entradas/Saídas</Title>
          <Select>
            <Option>-Selecione-</Option>
          </Select>
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
      <Footer marginTop="865px" top="110%" />
    </Fragment>
  );
}
