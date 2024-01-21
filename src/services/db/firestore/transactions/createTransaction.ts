import { Timestamp, addDoc } from "firebase/firestore";
import { transactionsCollectionRef } from "./getTransaction";

export async function createTransaction(
  FK_IdCategory: string,
  FK_IdSubCategory: string,
  FK_IdResponsible: string,
  date: Timestamp,
  price: number,
  title: string
) {
  await addDoc(transactionsCollectionRef, {
    FK_IdCategory,
    FK_IdSubCategory,
    FK_IdResponsible,
    date,
    price,
    title,
  });
}
