import './styles/reset.css';
import './styles/main.css';
import './styles/modal-windows.css';

import { loadEmployees } from './api/load-date';
import { showLoadingMessage } from './app/utils/show-loading-message';
import { route } from './app/pages/router/router';

export async function loadData() {
  document.body.replaceChildren();
  showLoadingMessage();

  const [employees] = await Promise.all([loadEmployees()]);
  route(employees);

  window.addEventListener('popstate', () => {
    route(employees);
  });
}

loadData();
