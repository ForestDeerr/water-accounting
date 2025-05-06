import type { Employees } from '../../types/baseType';

function createUsers(arr: Employees): HTMLElement {
  const users = document.createElement('div');
  users.className = 'users';

  arr.forEach((ele) => {
    const cashs = ele.transactions;

    let bank = 0;

    cashs.forEach((ele) => {
      if (ele.type === 'deposit') {
        bank += ele.amount;
      } else {
        bank -= ele.amount;
      }
    });
    console.log(cashs);
    const user = document.createElement('div');
    user.className = 'user';

    const userName = document.createElement('div');
    userName.className = 'user-name';

    const bnt = document.createElement('button');
    if (bank < 0) {
      bnt.className = 'user-btn red';
    } else if (bank > 0 && bank < 5) {
      bnt.className = 'user-btn orang';
    } else {
      bnt.className = 'user-btn';
    }
    bnt.textContent = ele.employeeName;
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
