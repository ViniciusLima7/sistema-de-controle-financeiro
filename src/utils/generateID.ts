import { CollectionReference, DocumentData, getDocs } from "firebase/firestore";

export const generateID = async (
  collection: CollectionReference<DocumentData>,
  field: string
) => {
  try {
    const data = await getDocs(collection);
    const maxID = Math.max(...data.docs.map((doc) => doc.data()[field]), 0);
    return maxID + 1;
  } catch (error) {
    console.log("error", error);
  }
};
