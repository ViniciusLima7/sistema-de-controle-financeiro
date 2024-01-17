import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const updateTransaction = async (id: string, updatedData: any) => {
  const transactionDoc = doc(db, "transactions", id);

  try {
    await updateDoc(transactionDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
