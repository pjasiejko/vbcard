import {Component, Input, OnInit} from '@angular/core';
import {Fullfilment} from '../../../../model/fullfilment';
import {faCircle, IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faCircle as fasCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vbcard-dot-bar',
  styleUrls: ['./dot-bar.component.scss'],
  templateUrl: './dot-bar.component.html'
})
export class DotBarComponent implements OnInit {

  @Input()
  pointsNumber = 6;

  checkedIcon: IconDefinition;
  notCheckedIcon: IconDefinition;

  dots: number[];

  @Input()
  itemData: Fullfilment;

  @Input()
  dotLabel: string[] = [];

  constructor() {
  }

  get checkedDot(): number {
    return this.itemData.level;
  }

  ngOnInit() {
    this.dots = this.createDots();
    this.checkedIcon = fasCircle;
    this.notCheckedIcon = faCircle;
  }

  createDots(): number[] {
    return Array.from(Array(this.pointsNumber), (e, i) => i + 1);
    /*
    const ret: number[] = [];
    for (let i = 0; i < this.pointsNumber; i++) {
      ret.push((i + 1));
    }
    return ret;
  */
  }

  getDotLabel(i: number): string {
    return this.dotLabel[i];
  }

  getRange(): number {
    return 100 / this.pointsNumber;
  }

}
