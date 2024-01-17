import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const transactionsCollectionRef = collection(db, "transactions");

export const getTransaction = async (setTransactions: React.Dispatch<any>) => {
  try {
    const data = await getDocs(query(transactionsCollectionRef));
    setTransactions(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};
