import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'vbcard-theme-colors',
  templateUrl: './theme-colors.component.html',
  styleUrls: ['./theme-colors.component.scss']
})
export class ThemeColorsComponent implements OnInit {
  themeColors: string[];
  currentThemeColor: string;

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.themeColors = this.themeService.getColorNames();
    this.themeService.getThemeColor().subscribe(themeColor => {
      this.currentThemeColor = themeColor;
    });
  }

  toggleTheme(themeName: string) {
    this.themeService.setThemeColor(themeName);
  }


}
