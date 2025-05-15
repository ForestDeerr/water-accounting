import { renderMainPages } from '../main-page/main-page';
import { renderEditPage } from '../edit-page/edit-page';
import { Employees } from '../../../types/baseType';
import { renderWaterPage } from '../water-page/water-page';

function route(employees: Employees) {
  const path = window.location.pathname;
  const authorization = sessionStorage.getItem('authorization');

  if (path === '/edit' && authorization) {
    document.body.replaceChildren(renderEditPage(employees));
  } else if (path === '/water' && authorization) {
    document.body.replaceChildren(renderWaterPage(employees));
  } else {
    document.body.replaceChildren(renderMainPages(employees));
    window.history.pushState({}, '', '/');
  }
}

export { route };
