import { Component, OnInit, Input } from '@angular/core';
import { Experiences } from '../_model/experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input() experiences: Experiences;

  constructor() { }

  ngOnInit() {
    if (this.experiences.education) {
      this.experiences.education.sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    }
    if (this.experiences.employers) {
      this.experiences.employers.sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    }
  }

}
