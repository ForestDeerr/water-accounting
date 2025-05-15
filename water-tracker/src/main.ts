import './styles/reset.css';
import './styles/main.css';
import './styles/modal-windows.css';

import { loadEmployees } from './api/load-date';
import { showLoadingMessage } from './app/utils/show-loading-message';
import { route } from './app/pages/router/router';
import { loadPass } from './api/load-pass';

export async function loadData() {
  document.body.replaceChildren();
  showLoadingMessage();

  const [employees] = await Promise.all([loadEmployees()]);
  const pass = await loadPass();
  sessionStorage.setItem('pass', pass);
  route(employees);

  window.addEventListener('popstate', () => {
    route(employees);
  });
}

loadData();
