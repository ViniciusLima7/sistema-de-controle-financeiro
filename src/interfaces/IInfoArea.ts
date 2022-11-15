export interface IInfoArea {
  currentMonth?: string;
  onMonthChange?: (newMonth: string) => void;
  receita?: number;
  despesa?: number;
}
