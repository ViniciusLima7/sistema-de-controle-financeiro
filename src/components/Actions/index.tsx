import { IAction } from "../../interfaces/IAction";
import ModalDelete from "../Modal/ModalDelete";
import ModalEdit from "../Modal/ModalEdit";

export default function Actions({ title = "registro" }: IAction) {
  return (
    <>
      <ModalEdit title={title} />
      <ModalDelete title={title} />
    </>
  );
}
