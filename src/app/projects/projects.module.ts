import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { IntroModule } from '../_shared/intro/intro.module';
import { DetailedListModule } from '../_shared/detailed-list/detailed-list.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    IntroModule,
    DetailedListModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
