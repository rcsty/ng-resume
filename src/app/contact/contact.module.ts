import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { IntroModule } from '../_shared/intro/intro.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    IntroModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
