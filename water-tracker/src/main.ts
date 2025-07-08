import './styles/reset.css';
import './styles/main.css';
import './styles/modal-windows.css';
import { loadEmployees } from './api/load-date';
import { showLoadingMessage } from './app/utils/show-loading-message';
import { route } from './app/pages/router/router';
import { loadPass } from './api/load-pass';
import { loadScores } from './api/load-score';

export async function loadData() {
  document.body.replaceChildren();
  showLoadingMessage();

  const [employees] = await Promise.all([loadEmployees()]);
  const pass = await loadPass();
  const scores = (await loadScores()) ?? [];
  sessionStorage.setItem('pass', pass);
  route(employees, scores);

  window.addEventListener('popstate', () => {
    route(employees, scores);
  });
}

loadData();
