import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';

function editNavigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnEdit = createButton({
    type: 'button',
    text: 'Добаваить сотрудника',
    className: 'btn-edit',
    onClick: () => {
      console.log('Добаваить сотрудника');
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Сохранить изменения',
    className: 'btn-edit',
    onClick: () => {
      console.log('Сохранить изменения');
    },
  });

  const btnBack = createButton({
    type: 'button',
    text: 'Выход',
    className: 'btn-edit',
    onClick: () => {
      window.history.pushState({}, '', '/');
      loadData();
    },
  });

  container.append(btnEdit, btnCalculate, btnBack);
  return container;
}

export { editNavigationPanel };
