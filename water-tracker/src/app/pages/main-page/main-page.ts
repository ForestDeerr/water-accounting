import type { Employees, PlayerScore } from '../../../types/baseType';
import { createHeader } from '../../header/header';
import { mainContent } from './main-content';

function renderMainPages(employees: Employees, scores: PlayerScore[]) {
  const container = document.createElement('div');
  container.className = 'main-container';
  container.append(createHeader(), mainContent(employees, scores));
  return container;
}
export { renderMainPages };
