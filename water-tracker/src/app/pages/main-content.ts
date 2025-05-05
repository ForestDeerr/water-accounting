import type { Employees } from '../../types/baseType';


function mainContent(employees: Employees): HTMLElement {
  const container = document.createElement('div');
  container.className = 'main-content';

  const textHeader = document.createElement('h1');
  textHeader.textContent = 'Water tracker';

  container.appendChild(textHeader);

  return container;
}

export { mainContent };

