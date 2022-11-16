import { ITitle } from "../../interfaces/ITitle";
import ModalDelete from "../Modal/ModalDelete";
import ModalEdit from "../Modal/ModalEdit";

export default function Actions({ title = "registro" }: ITitle) {
  return (
    <>
      <ModalEdit title={title} />
      <ModalDelete title={title} />
    </>
  );
}
