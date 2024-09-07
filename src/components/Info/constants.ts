import { IRouteItem } from '@/types/routes';

import PenIcon from '@/assets/icons/pen.svg';
import ChartBarIcon from '@/assets/icons/chart_bar.svg';
import BookTextIcon from '@/assets/icons/book_text.svg';
import BookmarksUserIcon from '@/assets/icons/bookmarks_user.svg';
import { ROUTES } from '@/constants/routes';

export const INFO_ROUTES: IRouteItem[] = [
  { icon: PenIcon, title: 'Mistakes', link: ROUTES.mistakes },
  { icon: ChartBarIcon, title: 'Statistics', link: ROUTES.statistics },
  { icon: BookTextIcon, title: 'Highway Code', link: ROUTES.highwayCode },
  { icon: BookmarksUserIcon, title: 'Favorites', link: ROUTES.favorites },
];