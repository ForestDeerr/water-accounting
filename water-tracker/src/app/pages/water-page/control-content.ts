import { Employees } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { modalWindowsForWrite } from './modal-windows-for-wrate';

function renderContent(employees: Employees) {
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
    className: 'btn-edit-disable',
    onClick: () => {
      modalWindowsForWrite(employees, Number(inputForControl.value));
    },
  });

  inputForControl.addEventListener('input', () => {
    const value = Number(inputForControl.value);
    if (value > 0) {
      btnCalculate.classList.remove('btn-edit-disable');
      btnCalculate.classList.add('btn-edit');
    } else {
      btnCalculate.classList.remove('btn-edit');
      btnCalculate.classList.add('btn-edit-disable');
    }
  });

  contentForControl.append(inputForControl, btnCalculate);

  control.append(labelForControl);

  controlContent.append(control, contentForControl);
  return controlContent;
}

export { renderContent };
