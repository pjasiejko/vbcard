import {Injectable} from '@angular/core';
import {ContactLink} from '../model/contact-link';
import {faGlobe, faHome, faMailBulk, faPhone, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLinkService {
  contactLinks: ContactLink[];

  contactLinkso: Observable<any[]>;

  constructor(db: AngularFirestore) {

    this.contactLinkso = db.collection('contactLinks').valueChanges();

    this.contactLinks = [
      new ContactLink({
        icon: faMailBulk,
        name: 'Email',
        content: 'jasiejko@gmail.com',
        url: 'mailto:jasiejko@gmail.com'
      }),
      new ContactLink({
        icon: faPhone,
        name: 'Telefon',
        content: '+48 691 126 634',
        url: ''
      }),
      new ContactLink({
        icon: faHome,
        name: 'Adres',
        content: 'Warzymice 96 D 72-005 Przecław',
        url: ''
      }),
      new ContactLink({
        icon: faGithub,
        name: 'Github',
        content: 'pjasiejko',
        url: 'https://github.com/pjasiejko'
      }),
      new ContactLink({
        icon: faLinkedin,
        name: 'Linkedin',
        content: 'piotr-jasiejko-058569178',
        url: 'https://www.linkedin.com/in/piotr-jasiejko-058569178'
      }),
      new ContactLink({
        icon: faGlobe,
        name: 'Własna strona',
        content: 'piotr.jasiejko.pl',
        url: 'http://piotr.jasiejko.pl'
      })
    ];
  }

  getIcon(icon: string): IconDefinition {
    switch (icon) {
      case 'email-bulk':
        return faMailBulk;
      case 'phone':
        return faPhone;
      case 'home':
        return faHome;
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      default:
        return faGlobe;
    }
  }

  /*
    getContactLinks(): ContactLink[] {
      return this.contactLinks;
    }
  */


  getContactLinks(): Observable<any[]> {
    return this.contactLinkso;
  }

}
