import './styles/reset.css';
import { createHeader } from './app/header/header';
import { loadEmployees } from './api/load-date';
import { showLoadingMessage } from './app/utils/show-loading-message';

async function loadData() {
  showLoadingMessage();
  const [employees] = await Promise.all([loadEmployees()]);

  document.body.replaceChildren(createHeader());
}

loadData();
