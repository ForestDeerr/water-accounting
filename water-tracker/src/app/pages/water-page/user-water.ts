import { saveDataToBase } from '../../../api/sava-date';
import { Employee } from '../../../types/baseType';

function userWater(user: Employee): HTMLElement {
  const container = document.createElement('div');
  container.className = 'user-for-water-page';

  const label = document.createElement('label');
  label.className = 'user-label';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'user-checkbox';
  if (user.isActive) {
    checkbox.checked = true;
  }

  const span = document.createElement('span');
  span.textContent = user.employeeName;
  span.className = 'user-name-for-water';

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      user.isActive = true;
      saveDataToBase([user]);
    } else {
      user.isActive = false;
      saveDataToBase([user]);
    }
  });

  label.append(checkbox, span);
  container.append(label);

  return container;
}

export { userWater };
