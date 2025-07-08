import type { Employees, PlayerScore } from '../../../types/baseType';
import { userList } from './user-list';
import { navigationPanel } from './navigation';

function mainContent(employees: Employees, scores: PlayerScore[]): HTMLElement {
  const container = document.createElement('div');
  container.className = 'main-content';

  container.append(userList(employees), navigationPanel(scores));

  return container;
}

export { mainContent };
