import type { Employees } from '../../types/baseType';
import { createHeader } from '../header/header';
import { mainContent } from './main-content';

function renderMainPages(employees: Employees) {
  // console.log(employees);

  const container = document.createElement('div');
  container.className = 'main-container';


  container.append(createHeader(), mainContent(employees));
  return container;
}
export { renderMainPages };
