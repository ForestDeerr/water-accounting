import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCtDbxHlTC-9UqaQWrS-HMETfV5pakVf3o',
  authDomain: 'water-tracker-6f8ca.firebaseapp.com',
  databaseURL: 'https://water-tracker-6f8ca-default-rtdb.europe-west1.firebasedatabase.app', 
  projectId: 'water-tracker-6f8ca',
  storageBucket: 'water-tracker-6f8ca.firebasestorage.app',
  messagingSenderId: '504549086275',
  appId: '1:504549086275:web:8e8de9603d52a80f9930f6',
  measurementId: 'G-EQSDZGL49G',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
