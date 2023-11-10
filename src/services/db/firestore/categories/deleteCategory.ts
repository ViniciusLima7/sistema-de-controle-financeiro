import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export async function deleteCategory(id: string) {
  const categoryDoc = doc(db, "categories", id);
  await deleteDoc(categoryDoc);
}
