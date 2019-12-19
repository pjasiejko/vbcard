import {Component, Input} from '@angular/core';
import {History} from '../../../model/history';

@Component({
  selector: 'vbcard-history-item',
  styleUrls: ['./history-item.component.scss'],
  templateUrl: './history-item.component.html'
})
export class HistoryItemComponent {


  @Input()
  itemData: History;

  constructor() {
  }
}
