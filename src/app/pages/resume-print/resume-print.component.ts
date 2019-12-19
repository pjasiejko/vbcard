import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ResumeService} from '../../services/resume.service';
import {History} from '../../model/history';
import {Skill} from '../../model/skill';
import {SkillType} from '../../model/skillType';

@Component({
  selector: 'vbcard-resume-print',
  styleUrls: ['./resume-print.component.scss'],
  templateUrl: './resume-print.component.html'
})
export class ResumePrintComponent implements OnInit, AfterViewInit {

  title: string;
  subtitle: string;
  educations: History[];
  experiences: History[];
  frontendSkills: Skill[];
  backendSkills: Skill[];
  languages: Skill[];

  constructor(private resumeService: ResumeService) {
    this.title = 'My resume';
    this.subtitle = 'I am software developer with frontend and backend skills .';

  }

  ngOnInit() {
    this.educations = this.resumeService.getEducations();

    this.experiences = this.resumeService.getExperiences();

    this.frontendSkills = this.resumeService.getSkills()
      .filter(skill => skill.type === SkillType.FRONTEND);

    this.backendSkills = this.resumeService.getSkills()
      .filter(skill => skill.type === SkillType.BACKEND);

    this.languages = this.resumeService.getSkills()
      .filter(skill => skill.type === SkillType.LANGUAGE);

  }

  ngAfterViewInit() {
    this.printResume();
  }

  printResume() {
    window.print();
  }
}
