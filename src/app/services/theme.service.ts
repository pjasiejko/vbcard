import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StateStorageService} from './state-storage.service';
import {VbcardConfigService} from '../core/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly colorNames: string[];

  private themeColor$: BehaviorSubject<string>;
  private themeTone$: BehaviorSubject<string>;

  constructor(private stateStorageService: StateStorageService, private configService: VbcardConfigService) {
    this.colorNames = [
      'white',
      'yellow',
      'red',
      'blue'
    ];
  }

  init() {

    const config = this.configService.getConfig();
    const currentThemeColor = this.stateStorageService.getThemeColor() || config.themeColor;
    const currentThemeTone = this.stateStorageService.getThemeTone() || config.themeTone;
    this.themeColor$ = new BehaviorSubject<string>(currentThemeColor);
    this.themeTone$ = new BehaviorSubject<string>(currentThemeTone);
  }

  toggleThemeTone(tone: string): string {
    return tone === 'dark' ? 'light' : 'dark';
  }

  getColorNames(): string[] {
    return this.colorNames;
  }

  setThemeColor(colorName: string) {
    if (this.colorNames.filter(c => c === colorName).length > 0) {
      this.themeColor$.next(colorName);
      this.stateStorageService.storeThemeColor(colorName);
    }
  }

  getThemeColor(): BehaviorSubject<string> {
    return this.themeColor$;
  }

  setThemeTone(toneName: string) {
    this.themeTone$.next(toneName);
    this.stateStorageService.storeThemeTone(toneName);
  }

  getThemeTone(): BehaviorSubject<string> {
    return this.themeTone$;
  }
}
