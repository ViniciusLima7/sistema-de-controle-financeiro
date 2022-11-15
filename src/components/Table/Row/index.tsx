import { ReactNode } from "react";
import { ITable } from "../../../interfaces/ITable";
import { TableRow } from "./styles";

export default function Row({
  children,
  justifyContent,
  display,
  marginLeft,
}: ITable) {
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
