import { Timestamp } from "firebase/firestore";

export interface ITransaction {
  id: string;
  FK_IdCategory: string;
  FK_IdSubCategory: string;
  FK_Responsible: string;
  date: Timestamp;
  price: number;
  title: string;
}
