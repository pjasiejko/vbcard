import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent, HomeComponent, MyResumeComponent, PortfolioComponent, ResumePrintComponent} from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
    data: {
      pageTitle: 'home.title'
    }
  }, {
    path: 'about-me',
    component: AboutMeComponent,
    canActivate: [],
    data: {
      pageTitle: 'about_me.title'
    }
  }, {
    path: 'my-resume',
    component: MyResumeComponent,
    canActivate: [],
    data: {
      pageTitle: 'my-resume.title'
    }
  }, {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [],
    data: {
      pageTitle: 'portfolio.title'
    }
  }, {
    path: 'print-resume',
    component: ResumePrintComponent,
    canActivate: [],
    outlet: 'print',
    data: {
      pageTitle: 'portfolio.title'
    }
  }, {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
