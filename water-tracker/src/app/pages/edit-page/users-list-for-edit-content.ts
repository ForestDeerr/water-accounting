import type { Employees } from '../../../types/baseType';

function userListForContent(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));

  const container = document.createElement('div');
  container.className = 'user-list-for-edit-page';

  return container;
}
export { userListForContent };
