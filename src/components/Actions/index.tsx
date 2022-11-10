import ModalDelete from "../Modal/ModalDelete";
import ModalEdit from "../Modal/ModalEdit";

interface ActionsProps {
  title?: string;
}

export default function Actions({ title = "registro" }: ActionsProps) {
  return (
    <>
      <ModalEdit title={title} />
      <ModalDelete title={title} />
    </>
  );
}
