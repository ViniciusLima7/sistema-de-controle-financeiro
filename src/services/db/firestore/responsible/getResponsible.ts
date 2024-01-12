import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

export const responsibleCollectionRef = collection(db, "responsible");

export const getResponsible = async (
  setResponsible: React.Dispatch<any>,
  orderByField: string = "idResponsible"
) => {
  try {
    const data = await getDocs(
      query(responsibleCollectionRef, orderBy(orderByField))
    );
    setResponsible(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const getResponsibleNamebyId = async (responsibleId: string) => {
  try {
    const responsibleDocRef = doc(db, "responsible", responsibleId);
    const responsibleDocSnapshot = await getDoc(responsibleDocRef);

    if (responsibleDocSnapshot.exists()) {
      const responsibleName = responsibleDocSnapshot.data().name;
      return responsibleName;
    } else {
      console.log("O documento não existe");
    }
  } catch (error) {
    console.log("error", error);
  }
};
