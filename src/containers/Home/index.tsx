import React, { FC } from 'react';

import { BasicLayout } from '@/layouts';
import { 
  Card, 
  Controllers, 
  Header, 
  Info,
  Navigation,
} from '@/components';

import './styles.css';

export const Home: FC = () => {
  return (
    <BasicLayout>
      <div className="home__main">
        <Header />
        <Card />
        <Controllers />
        <Info />
      </div>
      <Navigation />
    </BasicLayout>
  );
};