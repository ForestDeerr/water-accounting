import { closeModal } from './close-modal-windows';
import { createCloseButton } from './create-close-button';

function createModal(employeeName: string): HTMLElement {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = 'content';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = employeeName;

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  topWindows.append(modalTitle, closeBtn);
  modal.appendChild(topWindows);
  modal.appendChild(modalContent);
  modalOverlay.appendChild(modal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal(modalOverlay);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(modalOverlay);
    }
  });

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  return modalOverlay;
}

export { createModal };
