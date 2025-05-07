import type { Employees } from '../../../types/baseType';
import { editNavigationPanel } from './navigation';
import { userListForContent } from './users-list-for-edit-content';

function editContent(employees: Employees): HTMLElement {
  const container = document.createElement('div');
  container.className = 'edit-content';

  container.append( userListForContent(employees), editNavigationPanel());

  return container;
}

export { editContent };
