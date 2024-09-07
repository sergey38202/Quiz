import { IQuestionDTO } from '@/types/question';

export interface IStoreState {
    questions: IQuestionDTO[];
    passedCount: number;
    fetchQuestions: () => Promise<void>;
    toggleQuestion: (id: number) => void;
    setPassedCount: (count: number) => void;
}

export type FetchQuestions = (set: (partial: Partial<IStoreState>) => void, get: () => IStoreState) => () => Promise<void>;
export type ToggleQuestion = (set: (partial: Partial<IStoreState>) => void, get: () => IStoreState) => (id: number) => void;
export type SetPassedCount = (set: (partial: Partial<IStoreState>) => void) => (count: number) => void;
