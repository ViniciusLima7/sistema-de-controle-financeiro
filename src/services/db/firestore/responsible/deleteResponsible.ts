import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export async function deleteResponsible(id: string) {
  const responsibleDoc = doc(db, "responsible", id);
  await deleteDoc(responsibleDoc);
}
