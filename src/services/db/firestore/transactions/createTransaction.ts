import { addDoc } from "firebase/firestore";
import { transactionsCollectionRef } from "./getTransaction";

export async function createTransaction(
  FK_IdCategory: string,
  FK_IdSubCategory: string,
  FK_Responsible: string,
  date: Date,
  price: number,
  title: string
) {
  await addDoc(transactionsCollectionRef, {
    FK_IdCategory,
    FK_IdSubCategory,
    FK_Responsible,
    date,
    price,
    title,
  });
}
