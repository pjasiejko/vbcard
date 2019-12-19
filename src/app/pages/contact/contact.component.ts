import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {SendMailStateType} from '../../model/sendMailStateType';

@Component({
  selector: 'vbcard-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  title: string;
  subtitle: string;

  sendMailState = SendMailStateType.NOT_STARTED;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private db: AngularFirestore) {
    this.title = 'Get in touch';
    this.subtitle = 'I’M OPEN TO DISCUSSING ABOUT WORK OR PARTNERSHIPS.';
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  contactFormSubmit() {
    this.sendMailState = SendMailStateType.SENDING;
    const sendMailData = this.contactForm.getRawValue();
    sendMailData.language = 'pl';
    this.db.collection('/messages').add(sendMailData)
      .then(
        () => {
          this.sendMailState = SendMailStateType.SENT;
          this.contactForm.reset();
        }
      );
  }

  isSending(): boolean {
    return this.sendMailState === SendMailStateType.SENDING;
  }

  isSent(): boolean {
    return this.sendMailState === SendMailStateType.SENT;
  }


}
