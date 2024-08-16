export interface IButton {
  label: string;
  labelClass: string;
  getValue?: Function;
}

export interface ICalculatorState {
  displayValue: string;
  operationType: string;
  value1: number;
  value2: number;
}
