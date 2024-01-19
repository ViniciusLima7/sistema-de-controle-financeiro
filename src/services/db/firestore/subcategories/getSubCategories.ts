import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

export const subCategoriesCollectionRef = collection(db, "subcatgories");

export const getSubCategories = async (
  setSubCategories: React.Dispatch<any>,
  orderByField: string = "idSubCategory"
) => {
  try {
    const data = await getDocs(
      query(subCategoriesCollectionRef, orderBy(orderByField))
    );
    setSubCategories(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const getSubCategoryNameById = async (subCategoryId: string) => {
  try {
    const subCategoryDocRef = doc(db, "subcatgories", subCategoryId);
    const subCategoryDocSnapshot = await getDoc(subCategoryDocRef);

    if (subCategoryDocSnapshot.exists()) {
      const subCategoryName = subCategoryDocSnapshot.data().name;
      return subCategoryName;
    } else {
      console.log("O documento não existe");
    }
  } catch (error) {
    console.log("error", error);
  }
};
