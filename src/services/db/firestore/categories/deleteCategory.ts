import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export async function deleteCategory(id: string) {
  const categoriesDoc = doc(db, "categories", id);
  await deleteDoc(categoriesDoc);
}
