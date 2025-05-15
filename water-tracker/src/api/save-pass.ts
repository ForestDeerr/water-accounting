import { set, ref } from 'firebase/database';
import { db } from './firebase';

function saveAdminPassword(password: string) {
  const passwordRef = ref(db, 'admin/password');
  set(passwordRef, password);
}

export { saveAdminPassword };
