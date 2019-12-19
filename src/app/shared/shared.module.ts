import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {VcardSharedLibsModule} from './shared-libs.module';
import {PageTitleComponent} from '../layouts';
import {ContactLinksComponent} from '../pages/contact/contact-links/contact-links.component';

@NgModule({
  imports: [
    LayoutModule,
    VcardSharedLibsModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      disableConsoleLogging: false
    })
  ],
  declarations: [PageTitleComponent, ContactLinksComponent],
  entryComponents: [],
  exports: [VcardSharedLibsModule, PageTitleComponent, LayoutModule, ContactLinksComponent]
})
export class VcardSharedModule {
}
