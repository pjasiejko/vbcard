import {Component, OnInit} from '@angular/core';
import {ContactLinkService} from '../../../services/contact-link.service';
import {Observable} from 'rxjs';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vbcard-contact-links',
  styleUrls: ['./contact-links.component.scss'],
  templateUrl: './contact-links.component.html'
})
export class ContactLinksComponent implements OnInit {

  contactLinks: Observable<any[]>;

  constructor(private contactLinkService: ContactLinkService) {
    this.contactLinks = this.contactLinkService.getContactLinks();
  }

  ngOnInit() {

  }

  getIcon(icon: string): IconDefinition {
    return this.contactLinkService.getIcon(icon);
  }

}
