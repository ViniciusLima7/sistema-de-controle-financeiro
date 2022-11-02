import { Pencil, Trash } from "phosphor-react";
import { Button } from "../Button";
import { Container, TableHeadColumn, TableRow } from "./styles";

export default function TableArea() {
  return (
    <Container>
      <div>
        <Button text="+ Novo Cadastro" width="200px" marginBottom="20px" />
      </div>
      <table>
        <thead>
          <tr>
            <TableHeadColumn width="150px">Data</TableHeadColumn>
            <TableHeadColumn width="175px">Categoria</TableHeadColumn>
            <TableHeadColumn width="175px">SubCategoria</TableHeadColumn>
            <TableHeadColumn width="250px">Título</TableHeadColumn>
            <TableHeadColumn width="100px">Preço</TableHeadColumn>
            <TableHeadColumn width="180px">Responsável</TableHeadColumn>
            <TableHeadColumn width="130px">Ações</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableRow>20/11/2022</TableRow>
            <TableRow>Alimentação</TableRow>
            <TableRow>Fast-Food</TableRow>
            <TableRow>Burguer King</TableRow>
            <TableRow>R$ 50</TableRow>
            <TableRow>Vinicius</TableRow>
            <TableRow>
              <Pencil size={24} color="var(--black)" />
              <Trash size={24} color="var(--red-500)" />
            </TableRow>
          </tr>
          <tr>
            <TableRow>20/12/2022</TableRow>
            <TableRow>Alimentação</TableRow>
            <TableRow>Fast-Food</TableRow>
            <TableRow>Subway</TableRow>
            <TableRow>R$ 40</TableRow>
            <TableRow>Daiani</TableRow>
            <TableRow>
              <Pencil size={24} color="var(--black)" />
              <Trash size={24} color="var(--red-500)" />
            </TableRow>
          </tr>
        </tbody>
        <div></div>
      </table>
    </Container>
  );
}
