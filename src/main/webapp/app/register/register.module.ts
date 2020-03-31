import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsisekoSharedModule } from '../shared/shared.module';

import { REGISTER_ROUTE, RegisterComponent } from './';

@NgModule({
    imports: [
      IsisekoSharedModule,
      RouterModule.forRoot([ REGISTER_ROUTE ], { useHash: true })
    ],
    declarations: [
      RegisterComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IsisekoAppRegisterModule {}
