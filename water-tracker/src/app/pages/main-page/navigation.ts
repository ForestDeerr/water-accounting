import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';
import { modalAuthorization } from '../authorization-page/modal-authorization';
import { navigateTo } from '../router/router';
import { modalGame } from '../../game/modal-game';
import { PlayerScore } from '../../../types/baseType';

function navigationPanel(scores: PlayerScore[]): HTMLElement {
  const container = document.createElement('div');
  container.className = 'navigation-panel';

  const btnLogin = createButton({
    type: 'button',
    text: 'Войти',
    className: 'btn-edit',
    onClick: () => {
      modalAuthorization();
    },
  });

  const btnGame = createButton({
    type: 'button',
    text: 'Поднять KPI',
    className: 'btn-edit',
    onClick: () => {
      modalGame(scores);
    },
  });

  const btnEdit = createButton({
    type: 'button',
    text: 'Редактировать',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        navigateTo('/edit');
        loadData();
      } else {
        modalAuthorization();
      }
    },
  });

  const btnCalculate = createButton({
    type: 'button',
    text: 'Списать воду',
    className: 'btn-edit',
    onClick: () => {
      if (sessionStorage.getItem('authorization')) {
        navigateTo('/water');
        loadData();
      } else {
        modalAuthorization();
      }
    },
  });

  const btnExit = createButton({
    type: 'button',
    text: 'Выйти из системы',
    className: 'btn-edit',
    onClick: () => {
      sessionStorage.removeItem('authorization');
      loadData();
    },
  });

  if (sessionStorage.getItem('authorization')) {
    container.append(btnEdit, btnCalculate, btnExit);
  } else {
    container.append(btnLogin, btnGame);
  }

  return container;
}

export { navigationPanel };
