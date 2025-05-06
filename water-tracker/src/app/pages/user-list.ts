import type { Employees } from '../../types/baseType';

function userList(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));

  const container = document.createElement('div');
  container.className = 'user-list';

  const textContent = document.createElement('div');
  textContent.className = 'text-content';

  const textUser = document.createElement('div');
  textUser.className = 'text-user';
  textUser.textContent = 'Сотрудник';

  const textCash = document.createElement('div');
  textCash.className = 'text-cash';
  textCash.textContent = 'Баланс';

  const users = document.createElement('div');
  users.className = 'users';

  textContent.append(textUser, textCash);

  arr.forEach((ele) => {
    const user = document.createElement('div');
    user.className = 'user';

    const userName = document.createElement('div');
    userName.className = 'user-name';

    const bnt = document.createElement('button');
    bnt.className = 'user-btn';
    bnt.textContent = ele.employeeName;
    userName.appendChild(bnt)

    const cash = document.createElement('div');
    cash.className = 'cash';
    cash.textContent = '55';

    user.append(userName, cash);
    users.append(user);
  });

  container.append(textContent, users);

  return container;
}
export { userList };
