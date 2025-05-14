import { createButton } from '../../utils/create-button';

function renderContent() {
  const controlContent = document.createElement('div');
  controlContent.className = 'control-content';

  const control = document.createElement('div');
  control.className = 'text-content';

  const labelForControl = document.createElement('div');
  labelForControl.className = 'label-for-user';
  labelForControl.textContent = 'Списать';

  const contentForControl = document.createElement('div');
  contentForControl.className = 'content-for-control';

  const inputForControl = document.createElement('input');
  inputForControl.className = 'input-cash-water';
  inputForControl.placeholder = 'Сумма списания';
  inputForControl.type = 'number';
  inputForControl.min = '0';
  inputForControl.setAttribute('step', '0.01');

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать сумму',
    className: 'btn-edit',
    onClick: () => {},
  });

  contentForControl.append(inputForControl, btnCalculate);

  control.append(labelForControl);

  controlContent.append(control, contentForControl);
  return controlContent;
}

export { renderContent };
