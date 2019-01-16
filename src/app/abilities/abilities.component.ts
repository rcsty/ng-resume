import { Component, Input } from '@angular/core';
import { Abilities } from '../_model/abilities';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {

  @Input() abilities: Abilities;

  constructor() { }

}
