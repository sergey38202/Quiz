'use client';
import React, { FC, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GraduationCapIcon from '@/assets/icons/graduation_cap.svg';
import ChevronCircleRightFilledIcon from '@/assets/icons/chevron_circle_right_filled.svg';

import { ROUTES } from '@/constants/routes';
import { useStore } from '@/store/useStore';
import { DISPLAYED_QUESTIONS_COUNT } from './constants';
import './styles.css';

export const Card: FC = () => {
  const { questions, passedCount, fetchQuestions } = useStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // Memoize the total number of active questions to avoid recalculating on every render
  const totalActiveCount = useMemo(
    () => questions.filter(question => question.isActive).length,
    [questions]
  );

  // Memoize the lines array to avoid unnecessary re-renders
  const lines = useMemo(
    () => Array.from({ length: DISPLAYED_QUESTIONS_COUNT }, (_, index) => index < totalActiveCount),
    [totalActiveCount]
  );

  return (
    <div className="card">
      <div className="card__learningBlock">
        <div className="card__learningBlock-info">
          <div className="card__learningBlock-info--icon">
            <Image src={GraduationCapIcon} alt="Graduation Cap" />
          </div>
          <div className="card__learningBlock-info--text">
            <p className="card__learningBlock-info--text-title">Learning</p>
            <p className="card__learningBlock-info--text-subTitle">Category В</p>
          </div>
        </div>
        <Link href={ROUTES.learning}>
          <Image src={ChevronCircleRightFilledIcon} alt="Chevron Circle Right" />
        </Link>
      </div>
      <div className="card__resultBlock">
        <div className="card__resultBlock-title--wrapper">
          <p className="card__resultBlock-title">{`${passedCount} questions out of ${questions.length} passed`}</p>
        </div>
        <div className="card__resultBlock-success--lines">
          {lines.map((isActive, index) => (
            <div 
              key={index} 
              className={
                `card__resultBlock-success--line ${isActive ? 'card__resultBlock-success--line-filled' : ''}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
