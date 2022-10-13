import { ReactNode } from "react";
import { InputStyle, Label } from "./styles";

interface InputProps {
  icon?: ReactNode;
  type?: string;
  name?: string;
  placeholder: string;
}

export function Input({ icon, type, name, placeholder }: InputProps) {
  return (
    <Label>
      <i>{icon}</i>
      <InputStyle type={type} placeholder={placeholder} name={name} />
    </Label>
  );
}
