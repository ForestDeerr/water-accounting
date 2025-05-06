type Transaction = {
  date: string;
  type: 'deposit' | 'expense';
  amount: number;
};

type Employee = {
  employeeId: string;
  employeeName: string;
  isActive: boolean;
  isDelete: boolean;
  transactions: Transaction[];
};

export type Employees = Employee[];

export type ButtonType = {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className: string;
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
  disabled?: boolean;
};
