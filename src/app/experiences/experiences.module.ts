import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { IntroModule } from '../_shared/intro/intro.module';
import { DetailedListModule } from '../_shared/detailed-list/detailed-list.module';

@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    IntroModule,
    DetailedListModule
  ],
  exports: [
    ExperiencesComponent
  ]
})
export class ExperiencesModule { }
