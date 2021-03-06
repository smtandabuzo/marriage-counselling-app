import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { NewsComponent } from './news.component';
import { PAGE_ONE_ROUTE } from './page-one/page-one.route';
import { PAGE_TWO_ROUTE } from './page-two/page-two.route';

export const NEWS_ROUTE: Route = {
  path: 'news',
  component: NewsComponent,
  data: {
    authorities: [],
    pageTitle: 'news.title'
  },
  canActivate: [UserRouteAccessService],
  children: [
    PAGE_ONE_ROUTE,
    PAGE_TWO_ROUTE,
  ]
};
