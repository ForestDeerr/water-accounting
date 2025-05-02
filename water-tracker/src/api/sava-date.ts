import { Employees } from '../types/baseType';
import { set, ref } from 'firebase/database';
import { db } from './firebase';

function saveDataToBase(employees: Employees) {
  employees.forEach((employee) => {
    const employeeRef = ref(db, 'cashEntries/' + employee.employeeId);
    set(employeeRef, employee);
  });
}

export { saveDataToBase };
