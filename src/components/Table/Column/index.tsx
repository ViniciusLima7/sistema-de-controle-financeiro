import { ITable } from "../../../interfaces/ITable";
import { TableColumn } from "./styles";

export default function Column({ width, title }: ITable) {
  return <TableColumn width={width}>{title}</TableColumn>;
}
