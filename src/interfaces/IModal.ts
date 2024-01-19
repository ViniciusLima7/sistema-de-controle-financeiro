import { ICategory } from "./ICategory";
import { IEconomy } from "./IEconomy";
import { IResponsible } from "./IResponsible";
import { ISubCategory } from "./ISubCategory";
import { ITransaction } from "./ITransaction";

export interface IModal {
  title?: string;
  text?: string;
  marginBottom?: string;
  width?: string;
  data?: ICategory | ISubCategory | IResponsible | IEconomy | ITransaction;
}
