import { addDoc } from "firebase/firestore";
import { categoriesCollectionRef } from "./getCategories";
import { generateID } from "../../../../utils/generateID";

export async function createCategory(name: string, color: string) {
  await addDoc(categoriesCollectionRef, {
    name,
    color,
    idCategory: await generateID(categoriesCollectionRef, "idCategory"),
  });
}
