import { ReactNode } from "react";
import { InputStyle, Label } from "./styles";

interface InputProps {
  icon?: ReactNode;
  type?: string;
  name?: string;
  placeholder: string;
  width?: string;
  height?: string;
  widthLabel?: string;
  heightLabel?: string;
  marginBottom?: string;
}

export function Input({
  icon,
  type,
  name,
  placeholder,
  width = "290px",
  height = "50px",
  widthLabel,
  heightLabel,
  marginBottom = "2px",
}: InputProps) {
  return (
    <Label
      widthLabel={widthLabel}
      heightLabel={heightLabel}
      marginBottom={marginBottom}
    >
      <i>{icon}</i>
      <InputStyle
        type={type}
        placeholder={placeholder}
        name={name}
        width={width}
        height={height}
      />
    </Label>
  );
}
