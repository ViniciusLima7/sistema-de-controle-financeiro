import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export async function deleteTransaction(id: string) {
  const transactionDoc = doc(db, "transactions", id);

  await deleteDoc(transactionDoc);
}
