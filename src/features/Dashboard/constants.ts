import { ROUTE_PATHS } from '@config';
import { translateRaw } from '@translations';

import { Action } from './types';

export const actions: Action[] = [
  {
    icon: 'tx-send',
    title: translateRaw('DASHBOARD_ACTIONS_SEND_ASSETS_TITLE'),
    link: ROUTE_PATHS.SEND.path,
    description: translateRaw('DASHBOARD_ACTIONS_SEND_ASSETS_SUBTITLE')
  },
  {
    icon: 'tx-receive',
    title: translateRaw('DASHBOARD_ACTIONS_REQUEST_ASSETS_TITLE'),
    link: ROUTE_PATHS.REQUEST_ASSETS.path,
    description: translateRaw('DASHBOARD_ACTIONS_REQUEST_ASSETS_SUBTITLE'),
    filter: (isMobile) => isMobile
  },
  {
    icon: 'tx-sent',
    title: translateRaw('ADD_ACCOUNT'),
    link: ROUTE_PATHS.ADD_ACCOUNT.path,
    description: '',
    filter: (isMobile) => isMobile
  }
];
