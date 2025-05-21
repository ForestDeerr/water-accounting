import type { Employees } from '../../../types/baseType';
import { createHeader } from '../../header/header';
import { mainContent } from './main-content';
// import { saveDataToBase } from '../../../api/sava-date';
// import { mock } from '../../../mock/mock-date';
// import { saveAdminPassword } from '../../../api/save-pass';

function renderMainPages(employees: Employees) {
  // saveAdminPassword('1111')
  // console.log(employees);
  // saveDataToBase(mock)
  const container = document.createElement('div');
  container.className = 'main-container';


  container.append(createHeader(), mainContent(employees));
  return container;
}
export { renderMainPages };
