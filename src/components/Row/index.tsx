import { ReactNode } from "react";
import { TableRow } from "./styles";

interface RowProp {
  children?: string | ReactNode;
  justifyContent?: string;
  display?: string;
  marginLeft?: string;
}

export default function Row({
  children,
  justifyContent,
  display,
  marginLeft,
}: RowProp) {
  return (
    <TableRow
      justifyContent={justifyContent}
      display={display}
      marginLeft={marginLeft}
    >
      {children}
    </TableRow>
  );
}
