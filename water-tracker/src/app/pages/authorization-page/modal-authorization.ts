import { loadData } from '../../../main';
import { createButton } from '../../utils/create-button';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';
import { changePassword } from './change-password';

function modalAuthorization() {
  const pas = sessionStorage.getItem('pass');

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Выполнить вход';

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const content = document.createElement('div');
  content.className = 'content-for-authorization-modal';

  const passTitle = document.createElement('p');
  passTitle.className = 'pass-title';
  passTitle.textContent = 'Пароль:';

  const passInput = document.createElement('input');
  passInput.className = 'pass-input';
  passInput.placeholder = 'Пароль';
  passInput.type = 'password';
  passInput.required = true;

  passInput.addEventListener('input', () => {
    passInput.classList.remove('input-error');
    passInput.setCustomValidity('');
  });

  const btnLogin = createButton({
    type: 'button',
    text: 'Войти',
    className: 'btn-user-del',
    onClick: () => {
      if (passInput.value === pas) {
        sessionStorage.setItem('authorization', 'true');
        cleanupAndClose();
        window.history.pushState({}, '', `/`);
        loadData();
      } else {
        passInput.setCustomValidity('Неверный пароль');
        passInput.reportValidity();
        passInput.classList.add('input-error');
      }
    },
  });

  const btnChengPass = createButton({
    type: 'button',
    text: 'Сменить пароль.',
    className: 'btn-cheng-pass',
    onClick: () => {
      closeModal(modalOverlay);
      changePassword()
    },
  });

  content.append(passTitle, passInput, btnLogin, btnChengPass);
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
      if (passInput.value === pas) {
        sessionStorage.setItem('authorization', 'true');
        cleanupAndClose();
        window.history.pushState({}, '', `/`);
        loadData();
      } else {
        passInput.setCustomValidity('Неверный пароль');
        passInput.reportValidity();
        passInput.classList.add('input-error');
      }
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

  passInput.focus();
}

export { modalAuthorization };
