import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";
export async function deleteSubCategory(id: string) {
  const subCategoryDoc = doc(db, "subcatgories", id);
  await deleteDoc(subCategoryDoc);
}
