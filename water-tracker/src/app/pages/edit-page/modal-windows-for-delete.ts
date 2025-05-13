import { saveDataToBase } from '../../../api/sava-date';
import { loadData } from '../../../main';
import { Employee } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';

function createModalForDelete(user: Employee) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = user.employeeName;

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const content = document.createElement('div');
  content.className = 'content-for-edit-modal';
  content.textContent = `Удалить ${user.employeeName} ?`;

  const btnDel = createButton({
    type: 'button',
    text: 'Удалить',
    className: 'btn-user-del',
    onClick: () => {
      user.isDelete = true;
      saveDataToBase([user]);
      cleanupAndClose();
      loadData();
    },
  });

  content.append(btnDel);
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
      cleanupAndClose();
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

export { createModalForDelete };
