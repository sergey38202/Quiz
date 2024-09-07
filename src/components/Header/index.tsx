import React, { FC } from 'react';
import Image from 'next/image';

import CrownIcon from '@/assets/icons/crown.svg';
import FireIcon from '@/assets/icons/fire.svg';

import { SCORE } from './constants';
import './styles.css';

export const Header: FC = React.memo(() => {
  return (
    <header className="header">
      <p className="header__title">Ray Driving Theory</p>
      <div className="header__icons-blockWrapper">
        <div className="header__icons-blockWrapper-iconBlock">
          <Image src={CrownIcon} alt="Crown" />
        </div>
        <div className="header__icons-blockWrapper-iconBlock-large header__icons-blockWrapper-iconBlock">
          <Image src={FireIcon} alt="Fire" />
          <p className="header__icons-blockWrapper-iconBlock--title">
            {SCORE}
          </p>
        </div>
      </div>
    </header>  
  );
});

Header.displayName = 'Header';
