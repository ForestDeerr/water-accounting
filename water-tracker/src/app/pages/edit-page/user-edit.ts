import { createButton } from '../../utils/create-button';

function userEdit(name: string, cash: number) {
  const user = document.createElement('div');
  user.className = 'user-for-users-list';

  const btnEdit = createButton({
    type: 'button',
    text: 'Изменить имя',
    className: 'btn-user-edit',
    onClick: () => {
      inputName.disabled = !inputName.disabled;
      if (!inputName.disabled) {
        inputName.focus();
        inputName.value = name;
        btnEdit.textContent = 'Сохранить';
      } else {
        btnEdit.textContent = 'Изменить имя';
        // тут можно вызвать сохранение, например:
        // saveName(inputName.value)
      }
    },
  });

  const inputName = document.createElement('input');
  inputName.disabled = true;
  inputName.type = 'text';
  inputName.placeholder = name;
  inputName.className = 'input-user-edit';

  const inputCash = document.createElement('input');
  inputCash.disabled = true;
  inputCash.type = 'text';
  inputCash.placeholder = cash.toString();
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
  return user;
}

export { userEdit };
