import type { Employees } from '../../../types/baseType';
import { editNavigationPanel } from '../edit-page/navigation';

function waterContent(employees: Employees): HTMLElement {
  const container = document.createElement('div');
  container.className = 'edit-content';

  container.append(editNavigationPanel());

  return container;
}

export { waterContent };
