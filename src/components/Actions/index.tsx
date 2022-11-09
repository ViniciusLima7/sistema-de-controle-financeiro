import { Pencil, Trash } from "phosphor-react";
import ModalDelete from "../ModalDelete";

interface ActionsProps {
  title?: string;
}

export default function Actions({ title = "registro" }: ActionsProps) {
  return (
    <>
      <Pencil size={24} color="var(--black)" />
      <ModalDelete title={title} />
    </>
  );
}
