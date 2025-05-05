import { ref, get, child } from 'firebase/database';
import { db } from './firebase';

async function loadEmployees() {
  const snapshot = await get(child(ref(db), 'cashEntries'));
  return snapshot.val();
}

export { loadEmployees };
