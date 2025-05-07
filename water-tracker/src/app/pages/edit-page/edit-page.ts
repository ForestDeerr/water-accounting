import { Employees } from '../../../types/baseType';
import { createHeader } from '../../header/header';

function renderEditPage(employees: Employees) {
  const container = document.createElement('div');
  container.className = 'main-container';

  container.append(createHeader());
  return container;
}
export { renderEditPage };
