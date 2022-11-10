import Header from "../../components/Header";
import InfoArea from "../../components/InfoArea";
import InputArea from "../../components/InputArea";
import TableArea from "../../components/Table/TableArea";
import { Fragment } from "./styles";

export default function Cadastro() {
  return (
    <Fragment>
      <Header />
      <InfoArea />
      <InputArea />
      <TableArea title="Cadastro" />
    </Fragment>
  );
}
