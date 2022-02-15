import { Fragment } from 'react';

import { withRouter } from 'react-router-dom';

import { useEffectOnce } from '@vendor';

export const PageVisitsAnalytics = withRouter(({ history, location }) => {
  useEffectOnce(() => {
    history.listen((to) => {
      if (to.pathname === location.pathname) return;
    });
  });

  return <Fragment />;
});
