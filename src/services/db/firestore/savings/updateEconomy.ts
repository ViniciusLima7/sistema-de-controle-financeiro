import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const updateCategory = async (id: string, updatedData: any) => {
  const economyDoc = doc(db, "savings", id);

  try {
    await updateDoc(economyDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
