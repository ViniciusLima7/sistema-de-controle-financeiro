import { addDoc } from "firebase/firestore";
import { savingsCollectionRef } from "./getSavings";
import { generateID } from "../../../../utils/generateID";

export async function createEconomy(
  mes: string,
  ano: number,
  meta: number,
  FK_IdCResponsible: number
) {
  await addDoc(savingsCollectionRef, {
    mes,
    ano,
    meta,
    FK_IdCResponsible,
    idEconomy: await generateID(savingsCollectionRef, "idEconomy"),
  });
}
