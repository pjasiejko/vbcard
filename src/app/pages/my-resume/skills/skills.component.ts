import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../../../model/skill';
import {SkillType} from '../../../model/skillType';

@Component({
  selector: 'vbcard-skills',
  styleUrls: ['./skills.component.scss'],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  @Input()
  data: Skill[];

  constructor() {
  }

  ngOnInit() {

  }

  isChartBar(skill: Skill): boolean {
    return skill.type === SkillType.FRONTEND || skill.type === SkillType.BACKEND;
  }

  isDotBar(skill: Skill): boolean {
    return skill.type === SkillType.LANGUAGE;
  }

  isLanguageNative(skill: Skill): boolean {
    return skill.type === SkillType.LANGUAGE_NATIVE;
  }
}
