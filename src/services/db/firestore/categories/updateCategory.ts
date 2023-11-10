import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const updateCategory = async (id: string, updatedData: any) => {
  const categoryDoc = doc(db, "categories", id);

  try {
    await updateDoc(categoryDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
