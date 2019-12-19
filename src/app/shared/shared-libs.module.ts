import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, CommonModule, FontAwesomeModule, TranslateModule]
})
export class VcardSharedLibsModule {
}
