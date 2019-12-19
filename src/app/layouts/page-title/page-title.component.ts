import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vbcard-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  isDoubleWordTitle: boolean;
  titleFirstWord: string;
  titleEnds: string;

  constructor() {
  }

  ngOnInit() {
    if (this.title) {
      const titleSplit = this.title.split(' ');
      this.isDoubleWordTitle = titleSplit.length > 1;
      this.titleFirstWord = titleSplit[0];
      titleSplit.shift();
      this.titleEnds = titleSplit.join(' ');
    }
  }

}
