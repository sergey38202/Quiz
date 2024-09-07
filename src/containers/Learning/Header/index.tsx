import React, { FC } from 'react';
import Image from 'next/image';

import ArrowLeftRegularIcon from '@/assets/icons/arrow_left_regular.svg';

import './styles.css';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const Header: FC = () => {
  return (
    <div className="learning__header">
      <Link href={ROUTES.home}>
        <Image src={ArrowLeftRegularIcon} alt="Arrow left" />
      </Link>
      <p className="learning__header-title">Learning</p>
    </div>
  );
};