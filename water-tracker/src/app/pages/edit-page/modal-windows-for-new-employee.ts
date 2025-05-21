import { saveDataToBase } from '../../../api/sava-date';
import { loadData } from '../../../main';
import { Transaction, Employee } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { generateEmployeeId } from '../../utils/generate-employee-id';
import { closeModal } from '../modal-windows/close-modal-windows';
import { createCloseButton } from '../modal-windows/create-close-button';

const nameRegex = /^[A-Za-zА-Яа-яЁё\\.\\s]{3,}$/;

function createModalForNewEmployee() {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const topWindows = document.createElement('div');
  topWindows.className = 'top-windows';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Новый сотрудник';

  const closeBtn = createCloseButton(() => {
    closeModal(modalOverlay);
  });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const content = document.createElement('div');
  content.className = 'content-for-edit-modal';
  content.textContent = 'Имя:';

  const inputName = document.createElement('input');
  inputName.disabled = false;
  inputName.placeholder = 'Введите имя';
  inputName.type = 'text';
  inputName.className = 'input-user-edit';
  inputName.minLength = 3;
  inputName.pattern = '[A-Za-zА-Яа-яЁё\\.\\s]{3,}';

  inputName.required = true;

  inputName.addEventListener('input', () => {
    if (nameRegex.test(inputName.value.trim())) {
      inputName.classList.remove('input-cash-edit-alarm');
      inputName.setCustomValidity('');
    }
  });

  const cashText = document.createElement('div');
  cashText.className = 'content-for-edit-modal';
  cashText.textContent = 'Сумма';

  const inputCash = document.createElement('input');
  inputCash.disabled = false;
  inputCash.type = 'number';
  inputCash.min = '0';
  inputCash.setAttribute('step', '0.01');
  inputCash.className = 'input-cash-edit';

  function createUser() {
    const name = inputName.value.trim();
    const amount = Number(inputCash.value);

    if (!inputName.checkValidity()) {
      inputName.setCustomValidity('Введите корректное имя, например: Иванов В.В.');
      inputName.reportValidity();
      inputName.classList.add('input-cash-edit-alarm');
      inputName.focus();
      return;
    }

    cleanupAndClose();

    const createEmployee: Employee = {
      employeeId: generateEmployeeId(),
      employeeName: name,
      isActive: true,
      isDelete: false,
      transactions: [],
    };

    const transaction: Transaction = {
      date: new Date().toISOString().slice(0, 10),
      type: 'deposit',
      amount: parseFloat(amount.toFixed(2)),
    };

    createEmployee.transactions.push(transaction);
    saveDataToBase([createEmployee]);
    loadData();
  }

  const btnSava = createButton({
    type: 'button',
    text: 'Ok',
    className: 'btn-up-cash',
    onClick: () => {
      createUser();
    },
  });

  content.append(inputName, cashText, inputCash, btnSava);
  modalContent.append(content);

  topWindows.append(modalTitle, closeBtn);
  modal.append(topWindows, modalContent);

  modalOverlay.appendChild(modal);

  document.body.style.overflow = 'hidden';
  document.body.appendChild(modalOverlay);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') cleanupAndClose();
    if (e.key === 'Enter') {
      createUser();
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

  inputName.focus();
}

export { createModalForNewEmployee };
