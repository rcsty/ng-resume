import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.scss']
})
export class DetailedListComponent {

  @HostBinding('class.list') listClass = true;

  @Input() header: string;
  @Input() subheader: string;
  @Input() title: string;
  @Input() location?: string;
  @Input() link: string;

  constructor() { }

}
