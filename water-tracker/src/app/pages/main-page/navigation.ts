import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';
import { modalAuthorization } from '../authorization-page/modal-authorization';
import { navigateTo } from '../router/router';

function navigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnLogin = createButton({
    type: 'button',
    text: 'Войти',
    className: 'btn-edit',
    onClick: () => {
      modalAuthorization();
    },
  });

  const btnEdit = createButton({
    type: 'button',
    text: 'Редактировать',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        navigateTo('/edit')
        // window.history.pushState({}, '', '/edit');
        loadData();
      } else {
        modalAuthorization();
      }
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать воду',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        navigateTo('/water')
        // window.history.pushState({}, '', '/water');
        loadData();
      } else {
        modalAuthorization();
      }
    },
  });

  const btnExit = createButton({
    type: 'button',
    text: 'Выйти из системы',
    className: 'btn-edit',
    onClick: () => {
      sessionStorage.removeItem('authorization');
      loadData();
    },
  });

  if (sessionStorage.getItem('authorization')) {
    container.append(btnEdit, btnCalculate, btnExit);
  } else {
    container.append(btnLogin);
  }

  return container;
}

export { navigationPanel };
