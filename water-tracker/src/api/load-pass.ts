import { ref, get } from 'firebase/database';
import { db } from './firebase';

async function loadPass() {
  const passwordRef = ref(db, 'admin/password');
  const snapshot = await get(passwordRef);
  return snapshot.val();
}

export { loadPass };
