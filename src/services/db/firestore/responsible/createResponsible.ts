import { addDoc } from "firebase/firestore";
import { responsibleCollectionRef } from "./getResponsible";
import { generateID } from "../../../../utils/generateID";

export async function createResponsible(name: string) {
  await addDoc(responsibleCollectionRef, {
    name,
    idResponsible: await generateID(responsibleCollectionRef, "idResponsible"),
  });
}
