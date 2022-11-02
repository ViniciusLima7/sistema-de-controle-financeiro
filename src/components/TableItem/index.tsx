import { Pencil, Trash } from "phosphor-react";
import { TableRow } from "./styles";

export default function TableItem() {
  return (
    <>
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
    </>
  );
}
