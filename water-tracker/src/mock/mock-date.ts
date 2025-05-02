import { Employees } from "../types/baseType";

export const mock: Employees = [
    {
      employeeId: '123',
      employeeName: 'Иван Петров',
      isActive: true,
      transactions: [
        { date: '2025-04-26', type: 'deposit', amount: 150 },
        { date: '2025-04-27', type: 'expense', amount: 50 },
      ],
    },
    {
      employeeId: '124',
      employeeName: 'Ирина сидорова',
      isActive: false,
      transactions: [
        { date: '2025-04-26', type: 'deposit', amount: 150 },
        { date: '2025-04-27', type: 'expense', amount: 50 },
      ],
    },
  ];