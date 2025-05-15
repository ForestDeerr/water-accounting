import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';
import { modalAuthorization } from '../authorization-page/modal-authorization';

function navigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnEdit = createButton({
    type: 'button',
    text: 'Редактировать',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        window.history.pushState({}, '', '/edit');
        loadData();
      } else {
        modalAuthorization('edit');
      }
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать воду',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        window.history.pushState({}, '', '/water');
        loadData();
      } else {
        modalAuthorization('water');
      }
    },
  });

  container.append(btnEdit, btnCalculate);
  return container;
}

export { navigationPanel };
