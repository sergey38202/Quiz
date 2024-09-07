import { IRouteItem } from '@/types/routes';

import HomeIcon from '@/assets/icons/home.svg';
import RouteIcon from '@/assets/icons/route.svg';
import RankingIcon from '@/assets/icons/ranking.svg';
import UserIcon from '@/assets/icons/user.svg';
import { ROUTES } from '@/constants/routes';

export const NAVIGATION_ROUTES: IRouteItem[] = [
  { icon: HomeIcon, title: 'Home', link: ROUTES.home },
  { icon: RouteIcon, title: 'Your plan', link: ROUTES.plan },
  { icon: RankingIcon, title: 'Leaderboard ', link: ROUTES.leaderboard },
  { icon: UserIcon, title: 'Profile', link: ROUTES.profile },
];