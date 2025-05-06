import type { Employees } from "../types/baseType";

export const mock: Employees = [
    {
      employeeId: '123',
      employeeName: 'Иван Петров',
      isActive: true,
      isDelete: false,
      transactions: [
        { date: '2025-04-26', type: 'deposit', amount: 150 },
        { date: '2025-04-27', type: 'expense', amount: 50 },
      ],
    },
    {
      employeeId: '124',
      employeeName: 'Ирина Cидорова',
      isActive: false,
      isDelete: false,
      transactions: [
        { date: '2025-04-26', type: 'deposit', amount: 150 },
        { date: '2025-04-27', type: 'expense', amount: 50 },
        { date: '2025-04-28', type: 'expense', amount: 96 },
      ],
    },
    {
      employeeId: '125',
      employeeName: 'Вася Иванов',
      isActive: false,
      isDelete: false,
      transactions: [
        { date: '2025-04-26', type: 'deposit', amount: 150 },
        { date: '2025-04-27', type: 'expense', amount: 50 },
        { date: '2025-04-28', type: 'expense', amount: 150 },
      ],
    },
  ];