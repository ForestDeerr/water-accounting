import { createButton } from '../../utils/create-button';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';

function createModalForEdit(
  employeeName: string,
  cash: number,
  text: string,
  onSubmit: (value: number) => void
): HTMLElement {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = `${employeeName} : ${cash} BYN`;

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const content = document.createElement('div');
  content.className = 'content-for-edit-modal';
  content.textContent = `Введите сумму ${text}: `;

  const inputCash = document.createElement('input');
  inputCash.disabled = false;
  inputCash.type = 'number';
  inputCash.min = '0';
  inputCash.setAttribute('step', '0.01');
  inputCash.className = 'input-cash-edit';

  const btnSava = createButton({
    type: 'button',
    text: 'Ok',
    className: 'btn-up-cash',
    onClick: () => {
      onSubmit(Number(inputCash.value));
      cleanupAndClose();
    },
  });

  content.append(inputCash, btnSava);
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
      onSubmit(Number(inputCash.value));
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

  inputCash.focus();
  return modalOverlay;
}

export { createModalForEdit };
