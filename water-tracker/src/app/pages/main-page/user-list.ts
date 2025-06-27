import type { Employees } from '../../../types/baseType';
import { createUsers } from './users';
import { calculateTotalCash } from './calculate-total-cash';
import { createButton } from '../../utils/create-button';
import { loadData } from '../../../main';

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="8px" height="19px" viewBox="0 0 600 1200">
  <path fill="#FEFEFE" d="M291.88 81.5c28.62 0 52.02 23.4 52.02 52.02v811.81l125.8-125.8c20.24-20.24 53.33-20.24 73.57 0 20.23 20.24 20.23 53.33 0 73.57l-205.62 205.61c-2.23 3.91-5.02 7.6-8.35 10.93-17.71 17.71-45.26 19.92-65.42 6.64l-0.4-0.26c-4.06-2.66-7.73-5.88-10.91-9.54L41.21 895.13c-20.23-20.24-20.23-53.33 0-73.57 20.24-20.24 53.33-20.24 73.57 0l125.16 125.16V133.52c0-28.62 23.4-52.02 52.02-52.02z"/>
</svg>`;

let directionArrow = true;

function chengArrow() {
  directionArrow = !directionArrow;
  return directionArrow;
}

export function returnArrow() {
  return directionArrow;
}

function userList(employees: Employees): HTMLElement {
  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));
  const totalCash = calculateTotalCash(arr);

  const container = document.createElement('div');
  container.className = 'user-list';

  const textContent = document.createElement('div');
  textContent.className = 'text-content';

  const btnArrow = createButton({
    type: 'button',
    className: 'btn-arrow',
    onClick: () => {
      chengArrow();
      loadData();
    },
    iconSvg: arrow,
    iconClass: directionArrow ? '' : 'rotate-up',
  });

  const textUser = document.createElement('div');
  textUser.className = 'text-user';
  textUser.textContent = 'Сотрудник';

  const textCash = document.createElement('div');
  textCash.className = 'text-cash';
  textCash.style.whiteSpace = 'pre-line';
  textCash.textContent = `Баланс \n${totalCash.toFixed(2)} BYN`;

  textUser.append(btnArrow);

  textContent.append(textUser, textCash);
  container.append(textContent, createUsers(arr));

  return container;
}
export { userList };
