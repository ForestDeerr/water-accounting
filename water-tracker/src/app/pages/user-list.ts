import type { Employees } from '../../types/baseType';
import { createUsers } from './users';

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

  textContent.append(textUser, textCash);

  container.append(textContent, createUsers(arr));

  return container;
}
export { userList };
