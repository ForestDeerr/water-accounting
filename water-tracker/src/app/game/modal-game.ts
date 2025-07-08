import { saveScores } from '../../api/save-score';
import '../../styles/game.css';
import { PlayerScore } from '../../types/baseType';
import { closeModal } from '../pages/modal-windows/close-modal-windows';
import { createCloseButton } from '../pages/modal-windows/create-close-button';
import { getScore, startGame } from './game';
import { gameScore } from './game-score-menu';
import { gameStartMenu, getNameUser } from './start-game-menu';

let gameOn = false;
let content: HTMLElement;
let canvas: HTMLCanvasElement;
let startMenu: HTMLElement;
let scoreMenu: HTMLElement;

function modalGame(scores: PlayerScore[]) {
  if (document.querySelector('.modal-overlay')) return;

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal-game';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Поднятие KPI в одиночку';

  const closeBtn = createCloseButton(() => {
    cleanupAndClose();
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  content = document.createElement('div');
  content.className = 'content-for-game-modal';

  canvas = document.createElement('canvas');
  canvas.id = 'game';
  canvas.width = 800;
  canvas.height = 200;

  startMenu = gameStartMenu();
  scoreMenu = gameScore(scores);

  content.append(scoreMenu, startMenu);
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);
  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (gameOn) {
        gameOn = false;
        sendDateToSave();
      } else {
        cleanupAndClose();
      }
    }
  };

  document.addEventListener('keydown', onKeyDown);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      cleanupAndClose();
    }
  });

  function cleanupAndClose() {
    document.removeEventListener('keydown', onKeyDown);
    document.body.style.overflow = '';
    closeModal(modalOverlay);
    gameOn = false;
  }

  function sendDateToSave() {
    const filterScores = [...scores];
    const user = {
      name: getNameUser(),
      score: getScore(),
    };

    const existingIndex = filterScores.findIndex(
      (entry) => entry.name === user.name
    );

    if (existingIndex !== -1) {
      // Такой пользователь уже есть
      if (user.score > filterScores[existingIndex].score) {
        filterScores[existingIndex] = user; // Обновляем его результат
      }
    } else {
      // Пользователя с таким именем нет — проверяем, есть ли хуже
      const minScore = Math.min(...filterScores.map((s) => s.score));
      const minIndex = filterScores.findIndex((s) => s.score === minScore);

      if (user.score > minScore) {
        filterScores.splice(minIndex, 1); // Удаляем худшего
        filterScores.push(user); // Добавляем нового
      }
    }

    // Сортировка от большего к меньшему
    filterScores.sort((a, b) => b.score - a.score);

    saveScores(filterScores);
    canvas.width = canvas.clientWidth;
    content.replaceChildren(gameScore(filterScores), startMenu);
  }
}

function chengStatusGame() {
  gameOn = true;
  content.replaceChildren(canvas);
  startGame(canvas);
}

export { modalGame, chengStatusGame };
