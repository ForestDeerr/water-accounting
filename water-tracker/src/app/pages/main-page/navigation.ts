import { createButton } from '../../utils/create-button';

function navigationPanel(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnEdit = createButton({
    type: 'button',
    text: 'Редактировать',
    className: 'btn-edit',
    onClick: () => {
      console.log('Редактировать');
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать воду',
    className: 'btn-edit',
    onClick: () => {
      console.log('Списать воду');
    },
  });

  container.append(btnEdit, btnCalculate);
  return container;
}

export { navigationPanel };
