import {Component, Input, OnInit} from '@angular/core';
import {Fullfilment} from '../../../../model/fullfilment';

@Component({
  selector: 'vbcard-chart-bar',
  styleUrls: ['./chart-bar.component.scss'],
  templateUrl: './chart-bar.component.html'
})
export class ChartBarComponent implements OnInit {


  @Input()
  itemData: Fullfilment;

  constructor() {
  }

  ngOnInit() {

  }
}
