import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const updateResponsible = async (id: string, updatedData: any) => {
  const responsibleDoc = doc(db, "responsible", id);

  try {
    await updateDoc(responsibleDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
