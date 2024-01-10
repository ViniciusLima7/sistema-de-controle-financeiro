import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const updateSubCategory = async (id: string, updatedData: any) => {
  const subCategoryDoc = doc(db, "subcatgories", id);

  try {
    await updateDoc(subCategoryDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
