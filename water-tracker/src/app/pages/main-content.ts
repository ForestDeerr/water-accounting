import type { Employees } from '../../types/baseType';
import { userList } from './user-list';
import { navigationPanel } from './navigation';

function mainContent(employees: Employees): HTMLElement {
  const container = document.createElement('div');
  container.className = 'main-content';

  container.append(userList(employees), navigationPanel());

  return container;
}

export { mainContent };
