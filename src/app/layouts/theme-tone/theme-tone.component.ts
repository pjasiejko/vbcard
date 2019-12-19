import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {faMoon, faSun, IconDefinition} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'vbcard-theme-tone',
  templateUrl: './theme-tone.component.html',
  styleUrls: ['./theme-tone.component.scss']
})
export class ThemeToneComponent implements OnInit {

  toneName: string;
  toneIcon: IconDefinition;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.getThemeTone().subscribe(toneName => {
      this.toneName = toneName;
      this.toneIcon = this.toneName === 'dark' ? faSun : faMoon;
    });
  }

  toggleThemeTone(toneName: string) {
    this.themeService.setThemeTone(this.themeService.toggleThemeTone(toneName));
  }

}
