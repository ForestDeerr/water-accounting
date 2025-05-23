import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';
import { createModalForNewEmployee } from './modal-windows-for-new-employee';
import { navigateTo } from '../router/router';

function editNavigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnEdit = createButton({
    type: 'button',
    text: 'Добаваить сотрудника',
    className: 'btn-edit',
    onClick: () => {
      createModalForNewEmployee();
    },
  });

  const btnBack = createButton({
    type: 'button',
    text: 'Выход',
    className: 'btn-edit',
    onClick: () => {
      navigateTo('/')
      // window.history.pushState({}, '', '/');
      loadData();
    },
  });

  container.append(btnEdit, btnBack);
  return container;
}

export { editNavigationPanel };
