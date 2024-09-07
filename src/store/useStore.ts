import { 
  fetchQuestions, 
  setPassedCount, 
  toggleQuestion
} from '@/store/actions/questions';
import { IStoreState } from '@/store/types';
import { create } from 'zustand';

export const useStore = create<IStoreState>((set, get) => ({
  questions: [],
  passedCount: 0,
  fetchQuestions: fetchQuestions(set, get),
  toggleQuestion: toggleQuestion(set, get),
  setPassedCount: setPassedCount(set),
}));