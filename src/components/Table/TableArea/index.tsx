import { ITable } from "../../../interfaces/ITable";
import ModalAdd from "../../Modal/ModalAdd";
import Column from "../Column";
import TableItem from "../TableItem";
import { Container } from "./styles";

export default function TableArea({ title }: ITable) {
  return (
    <Container>
      <ModalAdd
        title="Cadastro"
        text="+ Novo Cadastro"
        width="200px"
        marginBottom="20px"
      />
      <table>
        <thead>
          <tr>
            <Column title="Data" width="150px" />
            <Column title="Categoria" width="175px" />
            <Column title="SubCategoria" width="175px" />
            <Column title="Título" width="250px" />
            <Column title="Preço" width="100px" />
            <Column title="Responsável" width="180px" />
            <Column title="Ações" width="100px" />
          </tr>
        </thead>
        <tbody>
          <TableItem title={title} />
        </tbody>
      </table>
    </Container>
  );
}
