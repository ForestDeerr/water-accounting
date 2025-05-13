import { saveDataToBase } from '../../../api/sava-date';
import { Employee, Transaction } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { createModalForEdit } from './modal-windows-for-edit';

function userEdit(user: Employee, cash: number) {
  const { employeeName } = user;

  const userContent = document.createElement('div');
  userContent.className = 'user-for-users-list';

  const btnEdit = createButton({
    type: 'button',
    text: 'Изменить имя',
    className: 'btn-user-edit',
    onClick: () => {
      inputName.disabled = !inputName.disabled;
      if (!inputName.disabled) {
        inputName.focus();
        inputName.value = employeeName;
        btnEdit.textContent = 'Сохранить';
      } else {
        btnEdit.textContent = 'Изменить имя';
        user.employeeName = inputName.value.trim();
        saveDataToBase([user]);
      }
    },
  });

  const inputName = document.createElement('input');
  inputName.disabled = true;
  inputName.type = 'text';
  inputName.placeholder = employeeName;
  inputName.className = 'input-user-edit';

  const inputCash = document.createElement('input');
  inputCash.disabled = true;
  inputCash.type = 'text';
  inputCash.value = String(Math.round(cash * 100) / 100);
  inputCash.placeholder = String(Math.round(cash * 100) / 100);
  inputCash.className = 'input-cash-edit';

  const btnUpCash = createButton({
    type: 'button',
    text: '+',
    className: 'btn-up-cash',
    onClick: () => {
      createModalForEdit(employeeName, cash, 'пополнения', (value) => {
        const newValue = Number(inputCash.value) + value;
        inputCash.value = newValue.toString();

        const transaction: Transaction = {
          date: new Date().toISOString().slice(0, 10),
          type: 'deposit',
          amount: value,
        };

        user.transactions.push(transaction);
        saveDataToBase([user]);
      });
    },
  });

  const btnLouCash = createButton({
    type: 'button',
    text: '-',
    className: 'btn-lou-cash',
    onClick: () => {
      createModalForEdit(employeeName, cash, 'списания', (value) => {
        const newValue = Number(inputCash.value) - value;
        inputCash.value = newValue.toString();

        const transaction: Transaction = {
          date: new Date().toISOString().slice(0, 10),
          type: 'expense',
          amount: value,
        };

        user.transactions.push(transaction);
        saveDataToBase([user]);
      });
    },
  });

  userContent.append(btnEdit, inputName, inputCash, btnUpCash, btnLouCash);
  return userContent;
}

export { userEdit };
