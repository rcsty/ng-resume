import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedListComponent } from './detailed-list.component';

@NgModule({
  declarations: [DetailedListComponent],
  imports: [
    CommonModule
  ],
  exports: [ DetailedListComponent ]
})
export class DetailedListModule { }
