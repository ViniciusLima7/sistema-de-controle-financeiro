import { addDoc } from "firebase/firestore";
import { categoriesCollectionRef, generateIDCategories } from "./getCategories";

export async function createCategory(name: string, color: string) {
  await addDoc(categoriesCollectionRef, {
    name,
    color,
    idCategory: await generateIDCategories(),
  });
}
