import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';
import { FixedTopLayoutComponent } from './shared/layout/app-layouts/fixed-top-layout/fixed-top-layout.component';

const routes: Routes = [{
  path: '', component: FixedTopLayoutComponent,
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
  ]
},
{ path: 'home', component: FixedTopLayoutComponent, loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
