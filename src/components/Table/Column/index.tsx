import { TableColumn } from "./styles";

interface ColumnProp {
  width?: string;
  title: string;
}

export default function Column({ width, title }: ColumnProp) {
  return <TableColumn width={width}>{title}</TableColumn>;
}
