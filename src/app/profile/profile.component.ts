import { Component, Input } from '@angular/core';
import { Profile } from './../_model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './profile.component.mobile.scss']
})
export class ProfileComponent {

  @Input() profile: Profile;

  constructor() { }

  getAge(): number {
    return Math.abs(new Date(Date.now() - new Date(this.profile.details.birthDate).getTime()).getUTCFullYear() - 1970);
  }

}
