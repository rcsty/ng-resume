import { Component, OnInit, Input } from '@angular/core';
import { Projects } from '../_model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Projects;

  constructor() { }

  ngOnInit() {
    if (this.projects.list) {
      this.projects.list.sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    }
  }

}
