import { saveAdminPassword } from '../../../api/save-pass';
import { loadData } from '../../../main';
import { createButton } from '../../utils/create-button';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';

function changePassword() {
  const pas = sessionStorage.getItem('pass');

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Сменить пароль';

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const content = document.createElement('div');
  content.className = 'content-for-authorization-modal';

  const oldPassTitle = document.createElement('p');
  oldPassTitle.className = 'pass-title';
  oldPassTitle.textContent = 'Старай пароль:';

  const oldPassInput = document.createElement('input');
  oldPassInput.className = 'pass-input';
  oldPassInput.placeholder = 'Пароль';
  oldPassInput.type = 'password';
  oldPassInput.required = true;

  oldPassInput.addEventListener('input', () => {
    oldPassInput.classList.remove('input-error');
    oldPassInput.setCustomValidity('');
  });

  const newPassTitle = document.createElement('p');
  newPassTitle.className = 'pass-title';
  newPassTitle.textContent = 'Новый пароль:';

  const newPassInput = document.createElement('input');
  newPassInput.className = 'pass-input';
  newPassInput.placeholder = 'Новый пароль';
  newPassInput.type = 'password';
  newPassInput.required = true;

  newPassInput.addEventListener('input', () => {
    newPassInput.classList.remove('input-error');
    newPassInput.setCustomValidity('');
  });

  const repeatPassTitle = document.createElement('p');
  repeatPassTitle.className = 'pass-title';
  repeatPassTitle.textContent = 'Повторите пароль:';

  const repeatPassInput = document.createElement('input');
  repeatPassInput.className = 'pass-input';
  repeatPassInput.placeholder = 'Повторить пароль';
  repeatPassInput.type = 'password';
  repeatPassInput.required = true;

  repeatPassInput.addEventListener('input', () => {
    repeatPassInput.classList.remove('input-error');
    repeatPassInput.setCustomValidity('');
  });

  const btnLogin = createButton({
    type: 'button',
    text: 'Сменить',
    className: 'btn-user-del',
    onClick: () => {
      if (oldPassInput.value !== pas) {
        oldPassInput.setCustomValidity('Неверный пароль');
        oldPassInput.reportValidity();
        oldPassInput.classList.add('input-error');
        return;
      }

      if (newPassInput.value.length < 4) {
        newPassInput.setCustomValidity('4 символа и больше ');
        newPassInput.reportValidity();
        newPassInput.classList.add('input-error');
        return;
      }

      if (newPassInput.value !== repeatPassInput.value) {
        repeatPassInput.setCustomValidity('Пароль не совпадает');
        repeatPassInput.reportValidity();
        repeatPassInput.classList.add('input-error');
        return;
      }
      saveAdminPassword(newPassInput.value);
      cleanupAndClose();
      loadData();
    },
  });

  content.append(
    oldPassTitle,
    oldPassInput,
    newPassTitle,
    newPassInput,
    repeatPassTitle,
    repeatPassInput,
    btnLogin
  );
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
        if (oldPassInput.value !== pas) {
            oldPassInput.setCustomValidity('Неверный пароль');
            oldPassInput.reportValidity();
            oldPassInput.classList.add('input-error');
            return;
          }
    
          if (newPassInput.value.length < 4) {
            newPassInput.setCustomValidity('4 символа и больше ');
            newPassInput.reportValidity();
            newPassInput.classList.add('input-error');
            return;
          }
    
          if (newPassInput.value !== repeatPassInput.value) {
            repeatPassInput.setCustomValidity('Пароль не совпадает');
            repeatPassInput.reportValidity();
            repeatPassInput.classList.add('input-error');
            return;
          }
          saveAdminPassword(newPassInput.value);
          cleanupAndClose();
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

  oldPassInput.focus();
}

export { changePassword };
