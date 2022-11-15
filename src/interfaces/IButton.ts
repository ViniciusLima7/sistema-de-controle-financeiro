import { ReactNode } from "react";

export interface IButton {
  text?: string;
  background?: string;
  hoverBg?: string;
  width?: string;
  height?: string;
  paddingLeft?: string;
  justifyContent?: string;
  marginTop?: string;
  marginBottom?: string;
  borderRadius?: string;
  onClick?: () => void;
}
