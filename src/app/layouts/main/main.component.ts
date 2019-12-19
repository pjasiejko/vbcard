import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../services/theme.service';
import {BehaviorSubject} from 'rxjs';
import {SidebarCollapseService} from '../../services/sidebar-collapse.service';

@Component({
  selector: 'vbcard-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sidebarCollapsed$: BehaviorSubject<boolean>;
  themeColor$: BehaviorSubject<string>;
  themeTone$: BehaviorSubject<string>;

  constructor(private router: Router, private themeService: ThemeService, private sidebarCollapseService: SidebarCollapseService) {
    window.addEventListener('beforeprint', (event) => {
      this.router.navigate([{outlets: {print: ['print-resume']}}]);
    });
  }

  ngOnInit() {
    this.themeColor$ = this.themeService.getThemeColor();
    this.themeTone$ = this.themeService.getThemeTone();
    this.sidebarCollapsed$ = this.sidebarCollapseService.getSidebarCollapsed();
  }
}
