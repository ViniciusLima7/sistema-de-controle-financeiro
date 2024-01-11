import { addDoc } from "firebase/firestore";
import { savingsCollectionRef } from "./getSavings";
import { generateID } from "../../../../utils/generateID";

export async function createEconomy(
  mes: number,
  ano: string,
  metaEconomy: number,
  FK_IdResponsible: string
) {
  await addDoc(savingsCollectionRef, {
    mes,
    ano,
    metaEconomy,
    FK_IdResponsible,
    idEconomy: await generateID(savingsCollectionRef, "idEconomy"),
  });
}
