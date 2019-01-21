import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resume } from './_model/resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.print.scss', './app.component.tablet.scss', './app.component.mobile.scss']
})
export class AppComponent implements OnInit {

  resume: Resume;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Resume>(environment.resume).toPromise()
      .then((res: Resume) => this.resume = res)
      .catch((error: any) => console.error(error));
  }
}
