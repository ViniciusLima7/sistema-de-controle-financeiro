import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

export const categoriesCollectionRef = collection(db, "categories");

export const getCategories = async (
  setCategories: React.Dispatch<any>,
  orderByField: string = "idCategory"
) => {
  try {
    const data = await getDocs(
      query(categoriesCollectionRef, orderBy(orderByField))
    );
    setCategories(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const getCategoryNameById = async (categoryId: string) => {
  try {
    const categoryDocRef = doc(db, "categories", categoryId);
    const categoryDocSnapshot = await getDoc(categoryDocRef);

    if (categoryDocSnapshot.exists()) {
      const categoryName = categoryDocSnapshot.data().name;
      return categoryName;
    } else {
      console.log("O documento não existe");
    }
  } catch (error) {
    console.log("error", error);
  }
};
