import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { IsisekoSharedModule } from 'app/shared/shared.module';
import { IsisekoCoreModule } from 'app/core/core.module';
import { IsisekoAppRoutingModule } from './app-routing.module';
import { IsisekoHomeModule } from './home/home.module';
import { IsisekoEntityModule } from './entities/entity.module';
import { IsisekoAppAboutUsModule } from './about-us/about-us.module';
import { IsisekoAppNewsModule } from './news/news.module';
import { IsisekoAppCalendarModule } from './calendar/calendar.module';
import { IsisekoAppGalleryModule } from './gallery/gallery.module';
import { IsisekoAppRegisterModule } from './register/register.module';
import { IsisekoAppContactUsModule } from './contact-us/contact-us.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    IsisekoSharedModule,
    IsisekoCoreModule,
    IsisekoHomeModule,
    IsisekoAppAboutUsModule,
    IsisekoAppNewsModule,
    IsisekoAppCalendarModule,
    IsisekoAppGalleryModule,
    IsisekoAppRegisterModule,
    IsisekoAppContactUsModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    IsisekoEntityModule,
    IsisekoAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class IsisekoAppModule {}
