import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const categoriesCollectionRef = collection(db, "categories");

export const getUsers = async (setCategories: React.Dispatch<any>) => {
  try {
    const data = await getDocs(categoriesCollectionRef);
    setCategories(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};
