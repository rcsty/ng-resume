import { Component, Input } from '@angular/core';
import { Profile } from '../_model/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() title: string;
  @Input() profile: Profile;

  constructor() { }

}
