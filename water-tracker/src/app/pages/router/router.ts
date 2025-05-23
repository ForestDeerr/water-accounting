import { renderMainPages } from '../main-page/main-page';
import { renderEditPage } from '../edit-page/edit-page';
import { Employees } from '../../../types/baseType';
import { renderWaterPage } from '../water-page/water-page';

const basePath = '/water-accounting';

function route(employees: Employees) {
  const path = window.location.pathname;
  const authorization = sessionStorage.getItem('authorization');

  if (path === '/water-accounting/edit' && authorization) {
    document.body.replaceChildren(renderEditPage(employees));
  } else if (path === '/water-accounting/water' && authorization) {
    document.body.replaceChildren(renderWaterPage(employees));
  } else {
    document.body.replaceChildren(renderMainPages(employees));
    navigateTo('/')
    // window.history.pushState({}, '', '/');
  }
}

function navigateTo(path: string) {
  window.history.pushState({}, '', basePath + path);
}

function getCurrentPath(): string {
  return window.location.pathname.replace(basePath, '') || '/';
}

export { route, navigateTo, getCurrentPath };

