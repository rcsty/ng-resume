import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { IntroModule } from '../_shared/intro/intro.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    IntroModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
