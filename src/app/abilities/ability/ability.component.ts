import { Component, Input } from '@angular/core';
import { Ability } from 'src/app/_model/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent {

  @Input() ability: Ability;

  constructor() { }

}
