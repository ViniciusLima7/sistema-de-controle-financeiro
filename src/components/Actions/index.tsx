import { ITitle } from "../../interfaces/ITitle";
import ModalDelete from "../Modal/ModalDelete";
import ModalEdit from "../Modal/ModalEdit";

export default function Actions({ title = "registro", data }: ITitle) {
  return (
    <>
      <ModalEdit title={title} data={data} />
      <ModalDelete title={title} data={data} />
    </>
  );
}
