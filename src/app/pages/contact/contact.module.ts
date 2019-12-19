import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {VcardSharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

import {ContactComponent} from './contact.component';

import {contactState} from './contact.route';

@NgModule({
  imports: [CommonModule, VcardSharedModule, RouterModule.forChild(contactState)],
  declarations: [ContactComponent]
})
export class ContactModule {
}
