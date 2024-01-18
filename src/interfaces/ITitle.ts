import { ICategory } from "./ICategory";
import { IEconomy } from "./IEconomy";
import { IResponsible } from "./IResponsible";
import { ISubCategory } from "./ISubCategory";
import { ITransaction } from "./ITransaction";

export interface ITitle {
  title?: string;
  data?: ICategory | ISubCategory | IResponsible | IEconomy | ITransaction;
}
