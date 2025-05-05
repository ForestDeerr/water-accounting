import './styles/reset.css';
import './styles/main.css';
import { loadEmployees } from './api/load-date';
import { showLoadingMessage } from './app/utils/show-loading-message';
import { renderMainPages } from './app/pages/main-page';

async function loadData() {
  showLoadingMessage();
  const [employees] = await Promise.all([loadEmployees()]);
  document.body.replaceChildren(renderMainPages(employees));
}

loadData();
