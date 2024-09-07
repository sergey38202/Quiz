export interface IQuestionDTO {
    id: number;
    question: string;
    options: string[];
    answer: string;
    success?: boolean;
    isActive?: boolean;
}