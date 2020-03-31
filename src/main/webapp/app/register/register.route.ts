import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { RegisterComponent } from './register.component';

export const REGISTER_ROUTE: Route = {
  path: 'register',
  component: RegisterComponent,
  data: {
    authorities: [],
    pageTitle: 'register.title'
  },
  canActivate: [UserRouteAccessService]
};
