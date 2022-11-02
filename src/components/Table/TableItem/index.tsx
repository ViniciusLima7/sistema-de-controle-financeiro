import { Pencil, Trash } from "phosphor-react";
import Row from "../Row";

export default function TableItem() {
  return (
    <>
      <tr>
        <Row>20/11/2022</Row>
        <Row>Alimentação</Row>
        <Row>Fast-Food</Row>
        <Row>Burguer King</Row>
        <Row>R$ 50</Row>
        <Row>Vinicius</Row>
        <Row justifyContent="space-evenly" display="flex" marginLeft="-20px">
          <Pencil size={24} color="var(--black)" />
          <Trash size={24} color="var(--red-500)" />
        </Row>
      </tr>
      <tr>
        <Row>20/12/2022</Row>
        <Row>Alimentação</Row>
        <Row>Fast-Food</Row>
        <Row>Subway</Row>
        <Row>R$ 40</Row>
        <Row>Daiani</Row>
        <Row justifyContent="space-evenly" display="flex" marginLeft="-20px">
          <Pencil size={24} color="var(--black)" />
          <Trash size={24} color="var(--red-500)" />
        </Row>
      </tr>
    </>
  );
}
