import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../../services/resume.service';
import {History} from '../../model/history';
import {Skill} from '../../model/skill';
import {SkillType} from '../../model/skillType';

@Component({
  selector: 'vbcard-my-resume',
  styleUrls: ['./my-resume.component.scss'],
  templateUrl: './my-resume.component.html'
})
export class MyResumeComponent implements OnInit {

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
      .filter(skill => skill.type === SkillType.LANGUAGE || skill.type === SkillType.LANGUAGE_NATIVE);

  }
}
