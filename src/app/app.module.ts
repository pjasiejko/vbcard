import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {VcardSharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MainComponent,
  NavbarComponent,
  SidebarComponent,
  ThemeColorComponent,
  ThemeColorsComponent,
  ThemeToneComponent
} from './layouts';
import {AboutMeComponent, HomeComponent, MyResumeComponent, PortfolioComponent, ResumePrintComponent} from './pages';

import {VbcardCoreModule} from './core/core.module';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {ProjectComponent} from './pages/portfolio/project/project.component';
import {HistoryItemComponent} from './pages/my-resume/history-item/history-item.component';
import {SkillsComponent} from './pages/my-resume/skills/skills.component';
import {ChartBarComponent} from './pages/my-resume/skills/chart-bar/chart-bar.component';
import {DotBarComponent} from './pages/my-resume/skills/dot-bar/dot-bar.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ThemeColorComponent,
    ThemeColorsComponent,
    MainComponent,
    ThemeToneComponent,
    ProjectComponent,
    AboutMeComponent, HomeComponent,
    MyResumeComponent, HistoryItemComponent, SkillsComponent, ChartBarComponent, DotBarComponent,
    PortfolioComponent,
    ResumePrintComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    VcardSharedModule,
    VbcardCoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule.withConfig({}),
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
