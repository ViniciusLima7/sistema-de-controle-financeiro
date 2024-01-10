import { ICategory } from "./ICategory";
import { ISubCategory } from "./ISubCategory";

export interface IModal {
  title?: string;
  text?: string;
  marginBottom?: string;
  width?: string;
  data?: ICategory | ISubCategory;
}
