import Actions from "../../Actions";
import Row from "../Row";

interface TableItemProps {
  title?: string;
}

export default function TableItem({ title }: TableItemProps) {
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
          <Actions title={title} />
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
          <Actions title={title} />
        </Row>
      </tr>
    </>
  );
}
