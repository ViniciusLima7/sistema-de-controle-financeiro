import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export async function deleteEconomy(id: string) {
  const economyDoc = doc(db, "savings", id);
  await deleteDoc(economyDoc);
}
