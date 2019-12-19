import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuOptionService} from '../../services/menu-option.service';
import {MenuOption} from '../../model/menu-option';
import {faCaretSquareRight} from '@fortawesome/free-solid-svg-icons';
import {PdfResumeService} from '../../services/pdf-resume.service';

@Component({
  selector: 'vbcard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuOptions: MenuOption[];
  faCaretSquareRight = faCaretSquareRight;
  @Input() sidebarCollapsed: boolean;

  constructor(private router: Router, private menuOptionService: MenuOptionService) {
  }

  ngOnInit() {
    this.menuOptions = this.menuOptionService.getMenu();
  }

  downloadResume() {
  }

}
