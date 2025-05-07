import type { Transactions } from './baseType';

function transformsArr(cashs: Transactions) {
  type MergedEntry = [string, number, number];

  const allArr: MergedEntry[] = [];

  cashs.forEach((ele) => {
    const arr: MergedEntry = [ele.date, 0, 0];
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

  const result: MergedEntry[] = Object.values(merged).sort(
    (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()
  );

  return result;
}
export { transformsArr };
