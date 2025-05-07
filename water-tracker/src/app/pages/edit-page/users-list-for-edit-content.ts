import type { Employees } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';

function userListForContent(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));
  console.log(arr);
  const container = document.createElement('div');
  container.className = 'users-list-for-edit-page';

  const user = document.createElement('div');
  user.className = 'user-for-users-list';

  const btnEdit = createButton({
    type: 'button',
    text: 'Изменить имя',
    className: 'btn-user-edit',
    onClick: () => {},
  });

  const inputName = document.createElement('input');
  inputName.disabled = true;
  inputName.type = 'text';
  inputName.placeholder = 'Сергей Иванов';
  inputName.className = 'input-user-edit';

  const inputCash = document.createElement('input');
  inputCash.disabled = true;
  inputCash.type = 'text';
  inputCash.placeholder = '35';
  inputCash.className = 'input-cash-edit';

  const btnUpCash = createButton({
    type: 'button',
    text: '-',
    className: 'btn-up-cash',
    onClick: () => {},
  });

  const btnLouCash = createButton({
    type: 'button',
    text: '+',
    className: 'btn-lou-cash',
    onClick: () => {},
  });

  user.append(btnEdit, inputName, inputCash, btnUpCash, btnLouCash);

  container.append(user);

  return container;
}
export { userListForContent };
