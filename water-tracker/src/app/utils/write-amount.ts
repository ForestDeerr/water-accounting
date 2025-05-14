import { saveDataToBase } from '../../api/sava-date';
import { Employees, Transaction } from '../../types/baseType';

function writeAmount(arr: Employees, cash: number) {
  const employees = Object.entries(arr).map(([id, obj]) => ({ id, ...obj }));

  const quantityEmployees = employees.filter(
    (user) => user.isActive && !user.isDelete
  );

  const amount = cash / quantityEmployees.length;

  for (const user of quantityEmployees) {
    const transaction: Transaction = {
      date: new Date().toISOString().slice(0, 10),
      type: 'expense',
      amount: parseFloat(amount.toFixed(2)),
    };

    user.transactions.push(transaction);
    saveDataToBase([user]);
  }
}

export { writeAmount };
