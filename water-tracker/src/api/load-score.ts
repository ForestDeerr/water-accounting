import { ref, get } from 'firebase/database';
import { db } from './firebase';
import { PlayerScore } from '../types/baseType';

async function loadScores(): Promise<PlayerScore[] | null> {
  const scoresRef = ref(db, 'gameScores');
  const snapshot = await get(scoresRef);
  return snapshot.exists() ? snapshot.val() : null;
}

export { loadScores };
