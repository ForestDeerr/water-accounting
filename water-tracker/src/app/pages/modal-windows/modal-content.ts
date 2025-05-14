import type { Transactions } from '../../../types/baseType';
import { transformsArr } from '../../utils/transforms-arr';

function modalContent(cashs: Transactions): HTMLElement {
  const transactions = transformsArr(cashs);

  let allCash = 0;

  function getClassCash(): string {
    if (allCash < 0) return 'red';
    if (allCash > 0 && allCash < 5) return 'orang';
    return '';
  }

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalTable = document.createElement('div');
  modalTable.className = 'modal-table';

  transactions.forEach((date) => {
    allCash = allCash + date[1] - date[2];

    const cashUp = document.createElement('div');
    cashUp.className = 'modal-cash-up';
    cashUp.innerHTML = `+ ${date[1].toFixed(2)}`;

    const cashDate = document.createElement('div');
    cashDate.className = 'modal-cash-date';

    const cashDateTable = document.createElement('p');
    cashDateTable.className = 'modal-data';
    cashDateTable.innerText = date[0];

    const cashAllCashTable = document.createElement('p');
    cashAllCashTable.className = getClassCash();
    cashAllCashTable.innerText = `${allCash.toFixed(2)} BYN`;

    cashDate.append(cashDateTable, cashAllCashTable);

    const cashLou = document.createElement('div');
    cashLou.className = 'modal-cash-lou';
    cashLou.innerHTML = `- ${date[2].toFixed(2)}`;

    const line = document.createElement('div');
    line.className = 'line-modal';
    line.append(cashUp, cashDate, cashLou);

    modalTable.prepend(line);
  });

  modalContent.append(modalTable);
  return modalContent;
}

export { modalContent };
