import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'vbcard-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor() {
    this.title = 'About me';
    this.subtitle = 'I design and code beautiful things, and I love what I do.';
  }

  ngOnInit() {
  }
}
