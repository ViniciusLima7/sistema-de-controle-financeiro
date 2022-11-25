import { ReactNode } from "react";

export interface IInput {
  icon?: ReactNode;
  type?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  widthLabel?: string;
  heightLabel?: string;
  marginBottom?: string;
  onChange?: (event: any) => void;
}
