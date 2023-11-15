import { ICategory } from "./ICategory";
import { ISubCategory } from "./ISubCategory";

export interface ITitle {
  title?: string;
  data?: ICategory | ISubCategory;
}
