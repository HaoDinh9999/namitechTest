
import { SideNavItem } from '../types';
import { imagePaths } from './images';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: imagePaths.CHART_BAR
  },
  {
    title: 'Blocks',
    path: '/blocks',
    icon: imagePaths.BLOCKS_BAR,
    submenu: true,
    subMenuItems: [
      { title: 'Blocks', path: '/blocks' },
      { title: 'Uncles', path: '/blocks/uncles' },
      { title: 'Reorgs', path: '/blocks/reorgs' },
    ],
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: imagePaths.TRANSACTIONS_BAR,
  },
  {
    title: 'Tokens',
    path: '/tokens',
    icon: imagePaths.TOKEN_BAR
  },
  {
    title: 'APIs',
    path: '/apis',
    icon: imagePaths.API_BAR,
  },
];
