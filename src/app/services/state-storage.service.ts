import {Injectable} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({providedIn: 'root'})
export class StateStorageService {
  constructor(private $localStorage: LocalStorageService) {
  }

  storeThemeColor(themeColor: string) {
    this.$localStorage.store('themeColor', themeColor);
  }

  getThemeColor() {
    return this.$localStorage.retrieve('themeColor');
  }

  storeThemeTone(themeTone: string) {
    this.$localStorage.store('themeTone', themeTone);
  }

  getThemeTone() {
    return this.$localStorage.retrieve('themeTone');
  }

}
