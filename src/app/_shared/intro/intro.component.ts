import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  @Input() title: string;
  @Input() intro: string;

  constructor() { }

}
