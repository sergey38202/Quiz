import React, { FC } from 'react';

import { BasicLayout } from '@/layouts';

import { Header } from './Header';
import { Title } from './Title';
import { Questions } from './Questions';
import './styles.css';

export const Learning: FC = () => {
  return (
    <BasicLayout>
      <div className="learning">
        <Header />
        <Title />
        <Questions />
      </div>
    </BasicLayout>
  );
};