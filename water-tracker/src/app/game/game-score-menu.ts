import { PlayerScore } from '../../types/baseType';

function gameScore(scores: PlayerScore[]): HTMLElement {
  const container = document.createElement('div');
  container.className = 'game-score-content';

  const textContent = document.createElement('div');
  textContent.className = 'text-content';

  const textUser = document.createElement('div');
  textUser.className = 'text-user';
  textUser.textContent = 'Сотрудник ';

  const textCash = document.createElement('div');
  textCash.className = 'text-cash';
  textCash.style.whiteSpace = 'pre-line';
  textCash.textContent = 'KPI';

  textContent.append(textUser, textCash);

  const usersContent = document.createElement('div');
  usersContent.className = 'users';

  scores.forEach((user) => {
    const textContent = document.createElement('div');
    textContent.className = 'user';

    const textUser = document.createElement('div');
    textUser.className = 'game-text-name';
    textUser.textContent = user.name;

    const textCash = document.createElement('div');
    textCash.className = 'game-text-score';
    textCash.style.whiteSpace = 'pre-line';
    textCash.textContent = user.score.toString();

    textContent.append(textUser, textCash);
    usersContent.append(textContent);
  });

  container.append(textContent, usersContent);

  return container;
}

export { gameScore };
