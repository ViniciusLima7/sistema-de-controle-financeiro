import React from "react";
import { Button } from "../Button";
import {
  Container,
  Input,
  InputLabel,
  InputTitle,
  Option,
  Select,
} from "./styles";

export default function InputArea() {
  return (
    <Container>
      <InputLabel>
        <InputTitle>Data</InputTitle>
        <Input type="date"></Input>
      </InputLabel>
      <InputLabel>
        <InputTitle>Categoria </InputTitle>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle>SubCategoria</InputTitle>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle>Título</InputTitle>
        <Input placeholder="Título"></Input>
      </InputLabel>
      <InputLabel>
        <InputTitle>Preço</InputTitle>
        <Input placeholder="Preço"></Input>
      </InputLabel>
      <InputLabel>
        <InputTitle>Responsável</InputTitle>
        <Select>
          <Option>-Selecione-</Option>
        </Select>
      </InputLabel>
      <Button
        justifyContent="center"
        text="Buscar"
        width="138px"
        height="30px"
        paddingLeft="12px"
        marginTop="31px"
        borderRadius="5px"
      />
    </Container>
  );
}
