import { collection, getDocs, orderBy, query } from "firebase/firestore";
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
