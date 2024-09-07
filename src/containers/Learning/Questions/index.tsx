'use client';
import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import CheckCircleIcon from '@/assets/icons/check_circle.svg';
import './styles.css';

export const Questions: FC = () => {
  const { questions, toggleQuestion, fetchQuestions } = useStore();

  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, [fetchQuestions, questions.length]);

  return (
    <div className="learning__questions">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className={`learning__questions-item ${question.isActive ? 'active' : ''}`}
          onClick={() => toggleQuestion(question.id)}
          tabIndex={0}
        >
          <div
            className={`learning__questions-item-success-logo ${
              question.isActive ? 'learning__questions-item-success-logo-show' : ''
            }`}
          >
            <Image src={CheckCircleIcon} alt="Check circle" />
          </div>
          <span className="learning__questions-item-title">{index + 1}</span>
        </div>
      ))}
    </div>
  );
};
