import { loadData } from '../../../main';
import { Employees } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { writeAmount } from '../../utils/write-amount';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';
import { navigateTo } from '../router/router';

function modalWindowsForWrite(employees: Employees, cash: number) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Списание средств';

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content-for-write';

  const usersList = document.createElement('div');
  usersList.className = 'modal-content-user-list';

  const arr = Object.entries(employees).map(([id, obj]) => ({ id, ...obj }));

  const quantityEmployees = arr.filter(
    (user) => user.isActive && !user.isDelete
  );

  for (const user of quantityEmployees) {
    const use = document.createElement('div');
    use.className = 'modal-content-user';
    use.textContent = user.employeeName;
    usersList.append(use);
  }

  const content = document.createElement('div');
  content.className = 'content-for-water-modal';

  const line = document.createElement('div');
  line.className = 'line';

  const line1 = document.createElement('p');
  line1.textContent = `Списать ${cash} BYN?`;

  const line2 = document.createElement('p');
  line2.className = 'line-2';
  line2.textContent = `(с каждого сотрудника по ${(cash / quantityEmployees.length).toFixed(2)} BYN)`;

  line.append(line1, line2);

  const btnDel = createButton({
    type: 'button',
    text: 'Списать',
    className: 'btn-user-del',
    onClick: () => {
      writeAmount(employees, cash);
      cleanupAndClose();
      navigateTo('/')
      // window.history.pushState({}, '', '/');
      loadData();
    },
  });

  content.append(line, btnDel);
  modalContent.append(usersList, content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
      writeAmount(employees, cash);
      cleanupAndClose();
      navigateTo('/')
      // window.history.pushState({}, '', '/');
      loadData();
    }
  };

  function cleanupAndClose() {
    document.removeEventListener('keydown', onKeyDown);
    closeModal(modalOverlay);
  }

  document.addEventListener('keydown', onKeyDown);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      cleanupAndClose();
    }
  });
}

export { modalWindowsForWrite };
