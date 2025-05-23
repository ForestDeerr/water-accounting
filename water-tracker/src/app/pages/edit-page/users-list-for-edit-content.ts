import type { Employees, Transactions } from '../../../types/baseType';
import { userEdit } from './user-edit';

function userListForContent(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));
  const container = document.createElement('div');
  container.className = 'users-list-for-edit-page';

  arr.forEach((user) => {
    const cashs: Transactions = user.transactions;
    let bank = 0;

    cashs.forEach((ele) => {
      if (ele.type === 'deposit') {
        bank += ele.amount;
      } else {
        bank -= ele.amount;
      }
    });
    if (!user.isDelete) {
      container.append(userEdit(user, bank));
    }
  });

  return container;
}
export { userListForContent };
