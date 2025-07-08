import { createButton } from '../utils/create-button';
import { chengStatusGame } from './modal-game';

let nameUserInsert: string;

function gameStartMenu(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'game-start-menu-content';

  const label = document.createElement('label');
  label.className = 'label-start';
  label.textContent = 'Введите имя Сотрудника';

  const nameUser = document.createElement('input');
  nameUser.className = 'input-cash-water';

  const btnStar = createButton({
    type: 'button',
    text: 'Поднять KPI',
    className: 'btn-start-game-disable',
    onClick: () => {
      chengStatusGame();
    },
  });

  nameUser.addEventListener('input', () => {
    const value = nameUser.value.trim();
    if (value.length > 2) {
      btnStar.classList.remove('btn-start-game-disable');
      btnStar.classList.add('btn-start-game');
      nameUserInsert = nameUser.value;
    } else {
      btnStar.classList.remove('btn-start-game');
      btnStar.classList.add('btn-start-game-disable');
    }
  });

  container.append(label, nameUser, btnStar);
  nameUser.focus();
  return container;
}

function getNameUser() {
  return nameUserInsert;
}

export { gameStartMenu, getNameUser };
