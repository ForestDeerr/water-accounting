import type { Employees } from '../../../types/baseType';
import { waterNavigationPanel } from './navigation';
import { usersListForWater } from './users-list-for-water';

function waterContent(employees: Employees): HTMLElement {
  const container = document.createElement('div');
  container.className = 'edit-content';

  container.append(usersListForWater(employees), waterNavigationPanel());

  return container;
}

export { waterContent };
