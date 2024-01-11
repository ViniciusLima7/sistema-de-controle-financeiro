import { ICategory } from "./ICategory";
import { IResponsible } from "./IResponsible";
import { ISubCategory } from "./ISubCategory";

export interface IModal {
  title?: string;
  text?: string;
  marginBottom?: string;
  width?: string;
  data?: ICategory | ISubCategory | IResponsible;
}
