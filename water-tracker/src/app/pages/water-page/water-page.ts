import '../../../styles/edit-page.css';

import { Employees } from '../../../types/baseType';
import { createHeader } from '../../header/header';
import { waterContent } from './water-content';

function renderWaterPage(employees: Employees) {
  const container = document.createElement('div');
  container.className = 'main-container';

  container.append(createHeader(), waterContent(employees));
  return container;
}
export { renderWaterPage };
