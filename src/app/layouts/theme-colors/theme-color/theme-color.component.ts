import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'vbcard-theme-color',
  templateUrl: './theme-color.component.html',
  styleUrls: ['./theme-color.component.scss']
})
export class ThemeColorComponent {

  @Input() colorName: string;

  @Input() active: boolean;

  @Output()
  changeTheme = new EventEmitter<string>();

  setThemeColor() {
    this.changeTheme.emit(this.colorName);
  }
}
