import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsisekoSharedModule } from '../shared/shared.module';

import { GALLERY_ROUTE, GalleryComponent } from './';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
    imports: [
      IsisekoSharedModule,
      RouterModule.forRoot([ GALLERY_ROUTE ], { useHash: true })
    ],
    declarations: [GalleryComponent, PageOneComponent, PageTwoComponent],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IsisekoAppGalleryModule {}
