import { FetchQuestions, SetPassedCount, ToggleQuestion } from '@/store/types';
import { IQuestionDTO } from '@/types/question';
import axios from 'axios';

export const fetchQuestions: FetchQuestions = (set, get) => async () => {
  const { questions } = get();
  if (questions.length === 0) {
    try {
      const response = await axios.get<IQuestionDTO[]>('/questions.json');
      set({ questions: response.data });
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }
};

export const toggleQuestion: ToggleQuestion = (set) => (id) => {
  // @ts-ignore
  set((state) => {
    const updatedQuestions: IQuestionDTO[] = state.questions.map((question: IQuestionDTO) =>
      question.id === id ? { ...question, isActive: !question.isActive } : question
    );

    const passedCount = updatedQuestions.filter((q) => q.isActive).length;

    return { questions: updatedQuestions, passedCount };
  });
};

export const setPassedCount: SetPassedCount = (set) => (count) => {
  set({ passedCount: count });
};
