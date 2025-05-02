type Transaction = {
  date: string;
  type: 'deposit' | 'expense';
  amount: number;
};

type Employee = {
  employeeId: string;
  employeeName: string;
  isActive: boolean;
  transactions: Transaction[];
};

export type Employees = Employee[];
