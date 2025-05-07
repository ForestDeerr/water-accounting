import '../../../styles/edit-page.css';

import { Employees } from '../../../types/baseType';
import { createHeader } from '../../header/header';
import { editContent } from './edit-content';

function renderEditPage(employees: Employees) {
  const container = document.createElement('div');
  container.className = 'main-container';

  container.append(createHeader(), editContent(employees));
  return container;
}
export { renderEditPage };
