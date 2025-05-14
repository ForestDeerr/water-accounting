import { renderMainPages } from '../main-page/main-page';
import { renderEditPage } from '../edit-page/edit-page';
import { Employees } from '../../../types/baseType';
import { renderWaterPage } from '../water-page/water-page';

function route(employees: Employees) {
  const path = window.location.pathname;

  if (path === '/edit') {
    document.body.replaceChildren(renderEditPage(employees));
  } else if (path === '/water') {
    document.body.replaceChildren(renderWaterPage(employees));
  } else {
    document.body.replaceChildren(renderMainPages(employees));
  }
}

export { route };
