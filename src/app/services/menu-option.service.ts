import {Injectable} from '@angular/core';
import {MenuOption} from '../model/menu-option';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionService {
  menuOptions: MenuOption[];

  constructor() {
    this.menuOptions = [
      new MenuOption({
        id: 1,
        title: 'Home',
        link: '/home'
      }),
      new MenuOption({
        id: 2,
        title: 'My resume',
        link: '/my-resume'
      }),
      new MenuOption({
        id: 3,
        title: 'Portfolio',
        link: '/portfolio'
      }),
      /*
      new MenuOption({
        id: 5,
        title: 'About me',
        link: '/about-me'
      }),

       */
      new MenuOption({
        id: 3,
        title: 'Contact',
        link: '/contact'
      })
    ];
  }

  getMenu(): MenuOption[] {
    return this.menuOptions;
  }

}
