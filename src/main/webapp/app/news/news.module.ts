import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsisekoSharedModule } from '../shared/shared.module';

import { NEWS_ROUTE, NewsComponent } from './';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
    imports: [
      IsisekoSharedModule,
      RouterModule.forRoot([ NEWS_ROUTE ], { useHash: true })
    ],
    declarations: [NewsComponent, PageOneComponent, PageTwoComponent],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IsisekoAppNewsModule {}
