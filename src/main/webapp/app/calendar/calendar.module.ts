import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsisekoSharedModule } from '../shared/shared.module';

import { CALENDAR_ROUTE, CalendarComponent } from './';

@NgModule({
    imports: [
      IsisekoSharedModule,
      RouterModule.forRoot([ CALENDAR_ROUTE ], { useHash: true })
    ],
    declarations: [
      CalendarComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IsisekoAppCalendarModule {}
