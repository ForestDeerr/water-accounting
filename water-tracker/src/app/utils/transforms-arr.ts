import type { Transactions } from '../../types/baseType';

function transformsArr(cashs: Transactions) {
  type MergedEntry = [string, number, number];

  const allArr: MergedEntry[] = [];

  function formatDate(dateStr: string): string {
    const [year, month, day] = dateStr.split('-');
    return `${day}.${month}.${year}`;
  }

  cashs.forEach((ele) => {
    const formattedDate = formatDate(ele.date);
    const arr: MergedEntry = [formattedDate, 0, 0];
    if (ele.type === 'deposit') arr[1] = ele.amount;
    if (ele.type === 'expense') arr[2] = ele.amount;
    allArr.push(arr);
  });

  const merged: Record<string, MergedEntry> = {};

  for (const [date, deposit, expense] of allArr) {
    if (!merged[date]) {
      merged[date] = [date, 0, 0];
    }
    merged[date][1] += deposit;
    merged[date][2] += expense;
  }

  const result: MergedEntry[] = Object.values(merged).sort((a, b) => {
    const toSortable = (str: string) => {
      const [d, m, y] = str.split('.');
      return new Date(`${y}-${m}-${d}`);
    };
    return toSortable(a[0]).getTime() - toSortable(b[0]).getTime();
  });

  return result;
}

export { transformsArr };
