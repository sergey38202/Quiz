import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { INFO_ROUTES } from './constants';
import './styles.css';

export const Info: FC = React.memo(() => {
  const infoLinks = useMemo(() => {
    return INFO_ROUTES.map((infoRoute) => (
      <Link key={infoRoute.link} href={infoRoute.link} className="info__link">
        <div className="info__link-icon-wrapper">
          <Image src={infoRoute.icon} alt={infoRoute.title} />
        </div>
        <p className="info__link-title">{infoRoute.title}</p>
      </Link>
    ));
  }, []);

  return (
    <div className="info">
      {infoLinks}
    </div>
  );
});

Info.displayName = 'Info';
