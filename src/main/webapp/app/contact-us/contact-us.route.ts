import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ContactUsComponent } from './contact-us.component';

export const CONTACT_US_ROUTE: Route = {
  path: 'contact-us',
  component: ContactUsComponent,
  data: {
    authorities: [],
    pageTitle: 'contact-us.title'
  },
  canActivate: [UserRouteAccessService]
};
