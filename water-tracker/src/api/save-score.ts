import { set, ref } from 'firebase/database';
import { db } from './firebase';
import { PlayerScore } from '../types/baseType';

function saveScores(scores: PlayerScore[]) {
  const scoresRef = ref(db, 'gameScores');
  set(scoresRef, scores);
}

export { saveScores };
