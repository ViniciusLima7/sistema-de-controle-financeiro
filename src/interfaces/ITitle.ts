import { ICategory } from "./ICategory";
import { IResponsible } from "./IResponsible";
import { ISubCategory } from "./ISubCategory";

export interface ITitle {
  title?: string;
  data?: ICategory | ISubCategory | IResponsible;
}
