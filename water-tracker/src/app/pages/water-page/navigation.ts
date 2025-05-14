import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';

function waterNavigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnBack = createButton({
    type: 'button',
    text: 'Выход',
    className: 'btn-edit',
    onClick: () => {
      window.history.pushState({}, '', '/');
      loadData();
    },
  });

  container.append(btnBack);
  return container;
}

export { waterNavigationPanel };
