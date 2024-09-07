import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NAVIGATION_ROUTES } from './constants';
import './styles.css';

export const Navigation: FC = React.memo(() => {
  const navigationItems = useMemo(() => {
    return NAVIGATION_ROUTES.map((navigationRoute) => (
      <li key={navigationRoute.link} className="navigation__list-item">
        <Link 
          href={navigationRoute.link} 
          className="navigation__list-item-title"
        >
          <div className="navigation__list-item-logo">
            <Image src={navigationRoute.icon} alt={navigationRoute.title} />
          </div>
          <p className="navigation__list-item-title">
            {navigationRoute.title}
          </p>
        </Link>
      </li>
    ));
  }, []);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems}
      </ul>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
