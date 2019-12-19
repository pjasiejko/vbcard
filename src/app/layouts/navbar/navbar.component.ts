import {Component, OnInit} from '@angular/core';
import {faAlignJustify, faAlignLeft} from '@fortawesome/free-solid-svg-icons';
import {SidebarCollapseService} from '../../services/sidebar-collapse.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'vbcard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faAlignLeft = faAlignLeft;
  faAlignJustify = faAlignJustify;

  sidebarCollapsed$: BehaviorSubject<boolean>;
  navbarCollapsed: boolean;

  constructor(private sidebarCollapseService: SidebarCollapseService) {
  }

  ngOnInit() {
    this.sidebarCollapsed$ = this.sidebarCollapseService.getSidebarCollapsed();
  }

  sidebarCollapse() {
    this.sidebarCollapseService.toggleSidebarCollapse();
  }

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
