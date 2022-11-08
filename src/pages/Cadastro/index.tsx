import { Pencil, Trash } from "phosphor-react";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
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
      <Footer marginTop="865px" top="110%" />
    </Fragment>
  );
}
