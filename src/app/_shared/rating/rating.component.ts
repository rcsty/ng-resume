import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  @Input() score: number;

  constructor() { }

  getIcon(index: number) {
    const rounded = Math.round(this.score * 2) / 2;
    return (rounded - index) < 0.5 ? 'star_border' : (rounded - index) > 0.5 ? 'star' : 'star_half';
  }

}
