import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { GalleryComponent } from './gallery.component';
import { PAGE_ONE_ROUTE } from './page-one/page-one.route';
import { PAGE_TWO_ROUTE } from './page-two/page-two.route';

export const GALLERY_ROUTE: Route = {
  path: 'gallery',
  component: GalleryComponent,
  data: {
    authorities: [],
    pageTitle: 'gallery.title'
  },
  canActivate: [UserRouteAccessService],
  children: [
    PAGE_ONE_ROUTE,
    PAGE_TWO_ROUTE,
  ]
};
