import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'vbcard-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  title: string;
  subtitle: string;
  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.title = 'My portfolio';
    this.subtitle = 'A few projects.';
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
