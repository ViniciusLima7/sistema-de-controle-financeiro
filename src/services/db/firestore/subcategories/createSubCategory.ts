import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { generateID } from "../../../../utils/generateID";
import { subCategoriesCollectionRef } from "./getSubCategories";

export async function createSubCategory(name: string, FK_IdCategory: number) {
  await addDoc(subCategoriesCollectionRef, {
    name,
    FK_IdCategory,
    idSubCategory: await generateID(
      subCategoriesCollectionRef,
      "idSubCategory"
    ),
  });
}
