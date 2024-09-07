import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import GameControllerIcon from '@/assets/icons/game_controller.svg';

import { CONTROLLERS } from './constants';
import './styles.css';

export const Controllers: FC = () => {
  const controllerLinks = useMemo(() => {
    return CONTROLLERS.map((controller) => (
      <Link 
        href={controller.link} 
        key={controller.link} 
        className="controllers__card"
      >
        <div className="controllers__card-logo-wrapper">
          <Image src={controller.icon} alt={controller.title} />
        </div>
        <p className="controllers__card-logo-wrapper-title">
          {controller.title}
        </p>
      </Link>
    ));
  }, []);

  return (
    <div className="controllers__container">
      <div className="controllers">
        {controllerLinks}
      </div>
      <Link 
        href={ROUTES.multiplayer} 
        className="controllers__card"
      >
        <div className="controllers__card-logo-wrapper">
          <Image src={GameControllerIcon} alt="Game controller" />
        </div>
        <p className="controllers__card-logo-wrapper-title">
          Multiplayer Learning
        </p>
      </Link>
    </div>
  );
};
