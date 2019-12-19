import {SkillType} from './skillType';
import {Fullfilment} from './fullfilment';

export class Skill implements Fullfilment {
  label: string;
  level: number;
  levelLabel: string;
  highlighted: boolean;
  type: SkillType;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
