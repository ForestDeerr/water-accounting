import { saveDataToBase } from '../../../api/sava-date';
import { Employee, Transaction } from '../../../types/baseType';
import { createButton } from '../../utils/create-button';
import { createModalForDelete } from './modal-windows-for-delete';
import { createModalForEdit } from './modal-windows-for-edit';

const delSvg = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="23" height="25" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 10400 13600">
  <path fill="currentColor" d="M1681.49 4022.23l7037.03 0 -370.37 4576.71c-4.39,175.41 -38.66,392.5 -51.17,557.3l-88.41 1154.97c-44.6,339.06 -136.02,2101.05 -224.44,2262.33 -73.62,134.27 -228.85,205.29 -429.63,205.29l-4708.99 0c-502.14,0 -485.3,-352.52 -503.14,-713.8l-142.95 -1708.9c-30.89,-208.55 -23.32,-376.41 -45.78,-589.13l-472.15 -5744.77zm8677.24 -1225.65l0 881.73c0,162.22 -181.7,343.92 -343.92,343.92l-476.19 0c0,218.17 -47.51,445.31 -52.91,661.37 -8.35,334.1 -96.71,976.22 -105.57,1323l-163.02 1979.84c-20.94,198.29 -27.49,440.03 -56.17,658.11 -61.47,467.39 -99.7,1493.08 -166.7,1949.7 -47.73,325.28 -67.72,973.22 -109.7,1292.41 -61.9,470.66 21.59,1167.98 -624.04,1518.82 -140.67,76.44 -318.25,167 -520.83,167l-5079.36 0c-198.8,0 -402.63,-97.41 -538.25,-176.04 -644.37,-373.6 -546.15,-1093.81 -610.5,-1532.35 -33.34,-227.23 -23.65,-430.06 -56.99,-657.29l-328.61 -3930.65c-16.44,-523.88 -145.89,-1442.65 -158.77,-1957.63 -7.6,-304.01 -105.82,-1044.63 -105.82,-1296.29l-476.19 0c-162.22,0 -343.91,-181.7 -343.91,-343.92l0 -899.47c0,-613.96 580.2,-1137.56 1111.11,-1137.56l2063.49 0 0 -476.19c0,-613.96 580.2,-1137.57 1111.11,-1137.57l1719.57 0c368.51,0 596.77,160.04 787.15,350.42 403.24,403.24 350.42,731.05 350.42,1263.34l2037.03 0c368.51,0 596.77,160.04 787.15,350.41 236.18,236.18 322.47,510.83 350.42,804.89zm-7142.85 2363.21l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm3174.6 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm-1587.3 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.66,-456.76 -793.65,0zm-3968.25 -2248.67c0,-311.78 164.41,-476.19 476.19,-476.19l7777.77 0c535.81,0 476.19,429.07 476.19,793.65l-8730.15 0 0 -317.46zm3174.6 -1613.76c0,-311.78 164.41,-476.19 476.19,-476.19l1428.57 0c541.93,0 476.19,439.86 476.19,820.11l-2380.95 0 0 -343.92z"/>
</svg>`;

function userEdit(user: Employee, cash: number) {
  const { employeeName } = user;

  const userContent = document.createElement('div');
  userContent.className = 'user-for-users-list';

  const btnDelete = createButton({
    type: 'button',
    text: '',
    className: 'btn-user-del',
    onClick: () => {
      createModalForDelete(user);
    },
  });

  btnDelete.insertAdjacentHTML('beforeend', delSvg);

  const btnEdit = createButton({
    type: 'button',
    text: 'Изменить имя',
    className: 'btn-user-edit',
    onClick: () => {
      inputName.disabled = !inputName.disabled;
      if (!inputName.disabled) {
        inputName.focus();
        inputName.value = employeeName;
        btnEdit.textContent = 'Сохранить';
      } else {
        btnEdit.textContent = 'Изменить имя';
        user.employeeName = inputName.value.trim();
        saveDataToBase([user]);
      }
    },
  });

  const inputName = document.createElement('input');
  inputName.disabled = true;
  inputName.type = 'text';
  inputName.placeholder = employeeName;
  inputName.className = 'input-user-edit';

  const inputCash = document.createElement('input');
  inputCash.disabled = true;
  inputCash.type = 'text';
  inputCash.value = String((Math.round(cash * 100) / 100).toFixed(2));
  inputCash.placeholder = String((Math.round(cash * 100) / 100).toFixed(2));
  inputCash.className = 'input-cash-edit';

  const btnUpCash = createButton({
    type: 'button',
    text: '+',
    className: 'btn-up-cash',
    onClick: () => {
      createModalForEdit(employeeName, cash, 'пополнения', (value) => {
        const newValue = Number(inputCash.value) + value;
        inputCash.value = newValue.toString();

        const transaction: Transaction = {
          date: new Date().toISOString().slice(0, 10),
          type: 'deposit',
          amount: value,
        };

        user.transactions.push(transaction);
        saveDataToBase([user]);
      });
    },
  });

  const btnLouCash = createButton({
    type: 'button',
    text: '-',
    className: 'btn-lou-cash',
    onClick: () => {
      createModalForEdit(employeeName, cash, 'списания', (value) => {
        const newValue = Number(inputCash.value) - value;
        inputCash.value = newValue.toString();

        const transaction: Transaction = {
          date: new Date().toISOString().slice(0, 10),
          type: 'expense',
          amount: value,
        };

        user.transactions.push(transaction);
        saveDataToBase([user]);
      });
    },
  });

  userContent.append(
    btnDelete,
    inputName,
    btnEdit,
    inputCash,
    btnUpCash,
    btnLouCash
  );
  return userContent;
}

export { userEdit };
