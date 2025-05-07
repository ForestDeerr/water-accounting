import type { Transactions } from '../../../types/baseType';
import { transformsArr } from '../../../types/transforms-arr';

function modalContent(cashs: Transactions): HTMLElement {
  console.log(transformsArr(cashs));

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
    cashUp.innerHTML = `+ ${date[1]}`;

    const cashDate = document.createElement('div');
    cashDate.className = 'modal-cash-date';

    const cashDateTable = document.createElement('p');
    cashDateTable.innerText = date[0];

    const cashAllCashTable = document.createElement('p');
    cashAllCashTable.className = getClassCash();
    cashAllCashTable.innerText = `${allCash} BYN`;

    cashDate.append(cashDateTable, cashAllCashTable);

    const cashLou = document.createElement('div');
    cashLou.className = 'modal-cash-lou';
    cashLou.innerHTML = `- ${date[2]}`;

    modalTable.append(cashUp, cashDate, cashLou);
  });

  modalContent.append(modalTable);
  return modalContent;
}

export { modalContent };
