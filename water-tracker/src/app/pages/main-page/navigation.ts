import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';

function navigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnEdit = createButton({
    type: 'button',
    text: 'Редактировать',
    className: 'btn-edit',
    onClick: () => {
      window.history.pushState({}, '', '/edit');
      loadData();
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать воду',
    className: 'btn-edit',
    onClick: () => {
      window.history.pushState({}, '', '/water');
      loadData();
    },
  });

  container.append(btnEdit, btnCalculate);
  return container;
}

export { navigationPanel };
