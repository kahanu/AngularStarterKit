import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { PrimaryNavComponent } from './navigation/primary-nav/primary-nav.component';
import { SharedModule } from '../shared.module';
import { FixedTopLayoutComponent } from './app-layouts/fixed-top-layout/fixed-top-layout.component';
import { FixedTopComponent } from './app-layouts/fixed-top-layout/fixed-top/fixed-top.component';
import { FixedMainContainerComponent } from './app-layouts/fixed-top-layout/fixed-main-container/fixed-main-container.component';
// tslint:disable-next-line: max-line-length
import { FixedMainContentComponent } from './app-layouts/fixed-top-layout/fixed-main-container/fixed-main-content/fixed-main-content.component';
// tslint:disable-next-line:max-line-length
import { FixedPrimaryNavComponent } from './app-layouts/fixed-top-layout/fixed-main-container/fixed-primary-nav/fixed-primary-nav.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    PrimaryNavComponent,
    FixedTopLayoutComponent,
    FixedTopComponent,
    FixedPrimaryNavComponent,
    FixedMainContainerComponent,
    FixedMainContentComponent
  ],
  imports: [SharedModule, RouterModule]
})
export class LayoutModule {}
