import { Component, OnInit, Input } from '@angular/core';
import { AbilitiesCategory } from 'src/app/_model/abilities-category';
import { Ability } from 'src/app/_model/ability';

@Component({
  selector: 'app-abilities-category',
  templateUrl: './abilities-category.component.html',
  styleUrls: ['./abilities-category.component.scss']
})
export class AbilitiesCategoryComponent implements OnInit {

  @Input() category: AbilitiesCategory;

  leftList: Ability[] = [];
  rightList: Ability[] = [];

  constructor() { }

  ngOnInit() {
    if (this.category.list) {
      const list = [...this.category.list]
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.score - a.score);
      const half = Math.ceil(list.length / 2);
      this.leftList = [...list].splice(0, half);
      this.rightList = [...list].splice(half);
    }
  }

}
