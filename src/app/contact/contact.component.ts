import { Component, Input } from '@angular/core';
import { Contact } from '../_model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() contact: Contact;

  constructor() { }

}
