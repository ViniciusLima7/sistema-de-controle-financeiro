import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const savingsCollectionRef = collection(db, "savings");

export const getSavings = async (
  setSavings: React.Dispatch<any>,
  orderByField: string = "idEconomy"
) => {
  try {
    const data = await getDocs(
      query(savingsCollectionRef, orderBy(orderByField))
    );
    setSavings(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};
