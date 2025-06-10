import type { Employees } from '../../../types/baseType';

function calculateTotalCash(employees: Employees): number {
  let totalCash = 0;

  employees.forEach((employee) => {
    if (!employee.isDelete) {
      employee.transactions.forEach((transaction) => {
        if (transaction.type === 'deposit') {
          totalCash += transaction.amount;
        } else if (transaction.type === 'expense') {
          totalCash -= transaction.amount;
        }
      });
    }
  });

  return totalCash;
}

export { calculateTotalCash };
