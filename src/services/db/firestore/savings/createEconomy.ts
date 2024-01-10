import { addDoc } from "firebase/firestore";
import { savingsCollectionRef } from "./getSavings";
import { generateID } from "../../../../utils/generateID";

export async function createCategory(name: string, color: string) {
  await addDoc(savingsCollectionRef, {
    name,
    color,
    idCategory: await generateID(savingsCollectionRef, "idEconomy"),
  });
}
