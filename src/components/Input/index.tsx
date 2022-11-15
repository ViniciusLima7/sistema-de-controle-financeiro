import { ReactNode } from "react";
import { IInput } from "../../interfaces/IInput";
import { InputStyle, Label } from "./styles";

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
}: IInput) {
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
