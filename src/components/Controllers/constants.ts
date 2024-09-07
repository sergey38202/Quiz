import LIcon from '@/assets/icons/l.svg';
import RocketLaunchIcon from '@/assets/icons/rocket_launch.svg';
import TvPlayIcon from '@/assets/icons/tv_play.svg';
import ArrowRightIcon from '@/assets/icons/arrow_right.svg';

import { ROUTES } from '@/constants/routes';
import { IRouteItem } from '@/types/routes';

export const CONTROLLERS: IRouteItem[] = [
  { icon: LIcon, title: 'DVSA Exam', link: ROUTES.dvsaExam },
  { icon: RocketLaunchIcon, title: 'Express mode', link: ROUTES.expressMode },
  { icon: TvPlayIcon, title: 'Hazard perception', link: ROUTES.hazard },
  { icon: ArrowRightIcon, title: 'Road signs', link: ROUTES.road },
];