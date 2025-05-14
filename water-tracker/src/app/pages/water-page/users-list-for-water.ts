import type { Employees } from '../../../types/baseType';
import { renderContent } from './control-content';
import { userWater } from './user-water';

function usersListForWater(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));

  const container = document.createElement('div');
  container.className = 'users-list-for-water-page';

  const userContent = document.createElement('div');
  userContent.className = 'user-content';

  const WindowsUsers = document.createElement('div');
  WindowsUsers.className = 'text-content';

  const labelForUsers = document.createElement('div');
  labelForUsers.className = 'label-for-user';
  labelForUsers.textContent = 'Выберите сотрудников';

  WindowsUsers.append(labelForUsers);
  userContent.append(WindowsUsers);

  const usersForWater = document.createElement('div');
  usersForWater.className = 'users-for-water';

  arr.forEach((user) => {
    if (!user.isDelete) {
      usersForWater.append(userWater(user));
    }
  });

  userContent.append(usersForWater);
  container.append(userContent, renderContent());

  return container;
}
export { usersListForWater };
