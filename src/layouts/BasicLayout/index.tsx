import React, { FC } from 'react';

import { IBasicLayoutProps } from './types';
import './styles.css';

export const BasicLayout: FC<IBasicLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="basicLayout">
      {children}
    </div>
  );
};