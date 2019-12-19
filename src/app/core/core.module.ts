import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {ThemeService} from '../services/theme.service';
import {NgxWebstorageModule} from 'ngx-webstorage';


@NgModule({
  imports: [
    HttpClientModule,
    NgxWebstorageModule.forRoot({prefix: 'vbcard', separator: '-'})
  ],
  providers: []
})
export class VbcardCoreModule {
  constructor(iconLibrary: FaIconLibrary, themeService: ThemeService) {
    iconLibrary.addIconPacks(fas);
    iconLibrary.addIconPacks(fab);
    themeService.init();
  }
}
