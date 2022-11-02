import { Button } from "../Button";
import TableItem from "../TableItem";
import { Container, TableHeadColumn } from "./styles";

export default function TableArea() {
  return (
    <Container>
      <Button text="+ Novo Cadastro" width="200px" marginBottom="20px" />
      <table>
        <thead>
          <tr>
            <TableHeadColumn width="150px">Data</TableHeadColumn>
            <TableHeadColumn width="175px">Categoria</TableHeadColumn>
            <TableHeadColumn width="175px">SubCategoria</TableHeadColumn>
            <TableHeadColumn width="250px">Título</TableHeadColumn>
            <TableHeadColumn width="100px">Preço</TableHeadColumn>
            <TableHeadColumn width="180px">Responsável</TableHeadColumn>
            <TableHeadColumn width="100px">Ações</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          <TableItem />
        </tbody>
      </table>
    </Container>
  );
}
