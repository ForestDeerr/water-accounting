import type { Employees, Transactions } from '../../types/baseType';
import { createButton } from '../utils/create-button';
import { createModal } from './modal-windows/modal-windows';

function createUsers(arr: Employees): HTMLElement {
  const users = document.createElement('div');
  users.className = 'users';

  arr.forEach((ele) => {
    const cashs: Transactions = ele.transactions;
    let bank = 0;

    cashs.forEach((ele) => {
      if (ele.type === 'deposit') {
        bank += ele.amount;
      } else {
        bank -= ele.amount;
      }
    });
    const user = document.createElement('div');
    user.className = 'user';

    const userName = document.createElement('div');
    userName.className = 'user-name';

    function getClassEmployeeName(): string {
      if (bank < 0) return 'user-btn red';
      if (bank > 0 && bank < 5) return 'user-btn orang';
      return 'user-btn';
    }

    const bnt = createButton({
      type: 'button',
      text: ele.employeeName,
      className: getClassEmployeeName(),
      onClick: () => {
        createModal(ele.employeeName, cashs);
      },
    });

    userName.appendChild(bnt);

    const cash = document.createElement('div');
    if (bank < 0) {
      cash.className = 'cash red';
    } else if (bank > 0 && bank < 5) {
      cash.className = 'cash orang';
    } else {
      cash.className = 'cash';
    }
    cash.textContent = String(bank);

    user.append(userName, cash);
    users.append(user);
  });

  return users;
}

export { createUsers };
