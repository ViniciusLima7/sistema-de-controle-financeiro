export interface ITransaction {
  id: string;
  FK_IdCategory: string;
  FK_IdSubCategory: string;
  FK_Responsible: string;
  date: Date;
  price: number;
  title: string;
}
