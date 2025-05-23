import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';
import { navigateTo } from '../router/router';

function waterNavigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

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

  container.append(btnBack);
  return container;
}

export { waterNavigationPanel };
