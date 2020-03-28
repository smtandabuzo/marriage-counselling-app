import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsisekoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [IsisekoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class IsisekoHomeModule {}
