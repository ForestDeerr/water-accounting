import type { Employees } from '../../types/baseType';
import { createHeader } from '../header/header';
import { mainContent } from './main-content';
import { saveDataToBase } from '../../api/sava-date';
import { mock } from '../../mock/mock-date';

function renderMainPages(employees: Employees) {
  // console.log(employees);
  // saveDataToBase(mock)
  const container = document.createElement('div');
  container.className = 'main-container';


  container.append(createHeader(), mainContent(employees));
  return container;
}
export { renderMainPages };
